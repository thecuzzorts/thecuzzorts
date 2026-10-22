// NOAA RFC QPE point lookup. Sampling uses a fixed window around the pin
// and does not follow the map's zoom or extent.

const IDENTIFY_URL =
  "https://mapservices.weather.noaa.gov/raster/rest/services/obs/rfc_qpe/MapServer/identify";

const SAMPLE_HALF_DEGREE = 0.5;
const IMAGE_DISPLAY = "1000,1000,96";
const MAX_CONCURRENT = 3;
const REQUEST_TIMEOUT_MS = 40000;

export const PERIODS = [
  {
    key: "h24",
    label: "24 hours",
    layerId: 28,
    productName: "nws_precip_last24hours_conus",
  },
  {
    key: "d7",
    label: "7 days",
    layerId: 56,
    productName: "nws_precip_last7days_conus",
  },
  {
    key: "d30",
    label: "30 days",
    layerId: 68,
    productName: "nws_precip_last30days_conus",
  },
  {
    key: "d180",
    label: "180 days",
    layerId: 84,
    productName: "nws_precip_last180days_conus",
  },
  {
    key: "d365",
    label: "365 days",
    layerId: 88,
    productName: "nws_precip_last365days_conus",
  },
];

const inflight = new Map();
let activeRequests = 0;
const waiters = [];

function missingPeriod() {
  return { status: "missing" };
}

function enqueue(task) {
  return new Promise((resolve, reject) => {
    const start = () => {
      activeRequests += 1;
      Promise.resolve()
        .then(task)
        .then(resolve, reject)
        .finally(() => {
          activeRequests -= 1;
          const next = waiters.shift();
          if (next) next();
        });
    };
    if (activeRequests < MAX_CONCURRENT) start();
    else waiters.push(start);
  });
}

function samplingExtent(latitude, longitude) {
  const south = Math.max(-90, latitude - SAMPLE_HALF_DEGREE);
  const north = Math.min(90, latitude + SAMPLE_HALF_DEGREE);
  const west = Math.max(-180, longitude - SAMPLE_HALF_DEGREE);
  const east = Math.min(180, longitude + SAMPLE_HALF_DEGREE);
  return `${west},${south},${east},${north}`;
}

export function identifyUrl(latitude, longitude) {
  const params = new URLSearchParams({
    f: "json",
    geometry: `${longitude},${latitude}`,
    geometryType: "esriGeometryPoint",
    sr: "4326",
    layers: `all:${PERIODS.map((period) => period.layerId).join(",")}`,
    tolerance: "0",
    mapExtent: samplingExtent(latitude, longitude),
    imageDisplay: IMAGE_DISPLAY,
    returnGeometry: "false",
  });
  return `${IDENTIFY_URL}?${params.toString()}`;
}

// A real zero stays a zero. Null, blank, NoData, and negative sentinels do not.
export function parseInches(raw) {
  if (raw == null) return null;
  const text = String(raw).trim();
  if (!text) return null;
  if (/nodata/i.test(text) || text.toLowerCase() === "null") return null;
  const value = Number(text);
  if (!Number.isFinite(value) || value < 0) return null;
  return value;
}

export function parseIdentify(payload) {
  const periods = {};
  for (const period of PERIODS) periods[period.key] = missingPeriod();

  if (!payload || payload.error || !Array.isArray(payload.results)) {
    return { ok: false, periods };
  }

  const byLayer = new Map();
  for (const result of payload.results) {
    const layerId = Number(result && result.layerId);
    if (!Number.isInteger(layerId) || byLayer.has(layerId)) continue;
    byLayer.set(layerId, result);
  }

  for (const period of PERIODS) {
    const result = byLayer.get(period.layerId);
    const attributes = result && result.attributes;
    const productName = attributes && attributes.name;
    if (!result || productName !== period.productName) continue;
    const inches = parseInches(attributes["Service Pixel Value"]);
    if (inches == null) continue;
    periods[period.key] = {
      status: "value",
      inches,
      productName,
    };
  }

  return { ok: true, periods };
}

async function requestIdentify(latitude, longitude) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  try {
    const response = await fetch(identifyUrl(latitude, longitude), {
      signal: controller.signal,
    });
    if (!response.ok) {
      throw new Error(`NOAA request failed (${response.status})`);
    }
    const payload = await response.json();
    if (payload && payload.error) {
      const message = payload.error.message || "NOAA request failed";
      throw new Error(message);
    }
    const parsed = parseIdentify(payload);
    if (!parsed.ok) throw new Error("NOAA returned an unreadable total");
    return {
      fetchedAt: Date.now(),
      periods: parsed.periods,
    };
  } finally {
    clearTimeout(timer);
  }
}

export function fetchPrecipitation(latitude, longitude) {
  const key = `${latitude},${longitude}`;
  const existing = inflight.get(key);
  if (existing) return existing;

  const promise = enqueue(() => requestIdentify(latitude, longitude)).finally(() => {
    if (inflight.get(key) === promise) inflight.delete(key);
  });
  inflight.set(key, promise);
  return promise;
}
