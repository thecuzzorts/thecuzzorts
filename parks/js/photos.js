/* ===================================================
   TheCuzzorts — National Parks photos
   Vanilla slideshow + click-to-fullscreen lightbox.
   Mirrors the baseball Photos section (no jQuery here).
   =================================================== */
(function () {
  'use strict';

  var slideshow = document.getElementById('parksSlideshow');
  if (!slideshow) { return; }

  var slides = Array.prototype.slice.call(slideshow.querySelectorAll('img'));
  if (!slides.length) { return; }

  var wrap = slideshow.closest('.slideshow-wrap');
  var caption = wrap ? wrap.querySelector('.cycle-caption') : null;
  var prevBtn = wrap ? wrap.querySelector('.prev') : null;
  var nextBtn = wrap ? wrap.querySelector('.next') : null;

  var idx = 0;

  // --- Slideshow -----------------------------------
  function showSlide(i) {
    idx = (i + slides.length) % slides.length;
    slides.forEach(function (img, j) {
      img.classList.toggle('is-active', j === idx);
    });
    if (caption) { caption.textContent = slides[idx].alt || ''; }
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', function (e) { e.preventDefault(); showSlide(idx - 1); });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', function (e) { e.preventDefault(); showSlide(idx + 1); });
  }

  // Swipe left/right to page (mobile), mirroring the baseball slideshow.
  // onSwipe(dir) receives -1 for a right-swipe (previous) and +1 for left (next).
  function addSwipe(el, onSwipe) {
    var startX = 0, startY = 0, tracking = false;
    el.addEventListener('touchstart', function (e) {
      if (e.touches.length !== 1) { tracking = false; return; }
      tracking = true;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });
    el.addEventListener('touchend', function (e) {
      if (!tracking) { return; }
      tracking = false;
      var t = e.changedTouches[0];
      var dx = t.clientX - startX;
      var dy = t.clientY - startY;
      // Horizontal swipe past threshold, and clearly more horizontal than vertical.
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
        onSwipe(dx < 0 ? 1 : -1);
      }
    }, { passive: true });
  }

  addSwipe(slideshow, function (dir) { showSlide(idx + dir); });

  showSlide(0);

  // --- Lightbox (full-screen) ----------------------
  var overlay = document.createElement('div');
  overlay.className = 'lb-overlay';
  overlay.innerHTML =
    '<button class="lb-close" aria-label="Close">&times;</button>' +
    '<button class="lb-prev" aria-label="Previous photo">&#8592;</button>' +
    '<figure class="lb-figure"><img class="lb-img" alt=""><figcaption class="lb-cap"></figcaption></figure>' +
    '<button class="lb-next" aria-label="Next photo">&#8594;</button>';
  document.body.appendChild(overlay);

  var lbImg = overlay.querySelector('.lb-img');
  var lbCap = overlay.querySelector('.lb-cap');
  var lbIdx = 0;

  function lbShow(i) {
    lbIdx = (i + slides.length) % slides.length;
    lbImg.src = slides[lbIdx].getAttribute('src');
    lbImg.alt = slides[lbIdx].alt || '';
    lbCap.textContent = slides[lbIdx].alt || '';
  }
  function lbOpen(i) {
    lbShow(i);
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function lbClose() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  slideshow.addEventListener('click', function (e) {
    var img = e.target.closest ? e.target.closest('img') : null;
    if (!img) { return; }
    lbOpen(slides.indexOf(img));
  });

  addSwipe(overlay, function (dir) { lbShow(lbIdx + dir); });

  overlay.querySelector('.lb-next').addEventListener('click', function (e) { e.stopPropagation(); lbShow(lbIdx + 1); });
  overlay.querySelector('.lb-prev').addEventListener('click', function (e) { e.stopPropagation(); lbShow(lbIdx - 1); });
  overlay.querySelector('.lb-close').addEventListener('click', lbClose);
  overlay.addEventListener('click', function (e) { if (e.target === overlay) { lbClose(); } });

  document.addEventListener('keydown', function (e) {
    if (!overlay.classList.contains('is-open')) { return; }
    if (e.key === 'Escape') { lbClose(); }
    else if (e.key === 'ArrowRight') { lbShow(lbIdx + 1); }
    else if (e.key === 'ArrowLeft') { lbShow(lbIdx - 1); }
  });
}());
