google.load('visualization', '1', {'packages': ['geochart']});
google.setOnLoadCallback(drawStatesVisitedMapJosh);

function drawStatesVisitedMapJosh() {
  var data = google.visualization.arrayToDataTable([
    ['State', 'Visited'],
    ['Alabama', 1],
    ['Alaska', null],
    ['Arizona', 1],
    ['Arkansas', 1],
    ['California', 1],
    ['Colorado', 1],
    ['Connecticut', 1],
    ['Delaware', null],
    ['Florida', 1],
    ['Georgia', 1],
    ['Hawaii', null],
    ['Idaho', null],
    ['Illinois', 1],
    ['Indiana', 1],
    ['Iowa', 1],
    ['Kansas', 1],
    ['Kentucky', 1],
    ['Louisiana', null],
    ['Maine', null],
    ['Maryland', 1],
    ['Massachusetts', 1],
    ['Michigan', 1],
    ['Minnesota', 1],
    ['Mississippi', 1],
    ['Missouri', 1],
    ['Montana', null],
    ['Nebraska', 1],
    ['Nevada', 1],
    ['New Hampshire', null],
    ['New Jersey', null],
    ['New Mexico', 1],
    ['New York', 1],
    ['North Carolina', 1],
    ['North Dakota', null],
    ['Ohio', 1],
    ['Oklahoma', 1],
    ['Oregon', null],
    ['Pennsylvania', 1],
    ['Rhode Island', 1],
    ['South Carolina', 1],
    ['South Dakota', 1],
    ['Tennessee', 1],
    ['Texas', 1],
    ['Utah', null],
    ['Vermont', null],
    ['Virginia', 1],
    ['Washington', null],
    ['West Virginia', 1],
    ['Wisconsin', 1],
    ['Wyoming', 1]
  ]);
  
  var opts = {
    region: 'US',
    displayMode: 'regions',
    resolution: 'provinces',
    colorAxis: {colors: ['#f8bbd0', '#00ac4b']},
    defaultColor: '#9d9d9d',
    datalessRegionColor: '#f8bbd0',
    legend: 'none',
    tooltip: {isHtml: true},
    backgroundColor: '#003F5D'
  };
  var geochart = new google.visualization.GeoChart(
      document.getElementById('joshVisited'));
  geochart.draw(data, opts);
};

$(window).resize(function(){
    drawStatesVisitedMapJosh();
});