/* =========================================================================
   SHARED SITE SCRIPT
   1) Wraps any element with class="wobble" into per-letter <span>s so the
      CSS "bob" animation can stagger each letter (OMORI-style title wiggle).
   2) Handles the Projects page accordion open/close.
   3) Shows a friendly placeholder if the face photo hasn't been added yet.
   ========================================================================= */

// ---- 1. Letter wobble ----------------------------------------------------
function initWobbleText() {
  document.querySelectorAll('.wobble').forEach((el) => {
    const text = el.textContent;
    el.textContent = '';
    [...text].forEach((char, i) => {
      const span = document.createElement('span');
      span.className = 'letter';
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.animationDelay = `${i * 0.07}s`;
      el.appendChild(span);
    });
  });
}

// ---- 2. Accordion (Projects page) ----------------------------------------
function initAccordion() {
  document.querySelectorAll('.accordion-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const section = btn.parentElement;
      const wasOpen = section.classList.contains('open');
      section.classList.toggle('open');
      // If we just collapsed this section, also close any project detail
      // popup left open inside it (relevant on mobile).
      if (wasOpen) {
        section.querySelectorAll('.project-detail.open').forEach((d) => d.classList.remove('open'));
      }
    });
  });

  // Escape closes an open mobile detail popup, same as the lightbox.
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    document.querySelectorAll('.project-detail.open').forEach((d) => d.classList.remove('open'));
  });
}

// ---- 3. Face photo placeholder fallback -----------------------------------
function initFaceFallback() {
  const img = document.querySelector('.face-frame img');
  const placeholder = document.querySelector('.face-placeholder');
  if (!img || !placeholder) return;
  img.addEventListener('error', () => {
    img.style.display = 'none';
    placeholder.style.display = 'block';
  });
}

// ---- 4. Lightbox (click-to-zoom for images / videos / slide decks) -------
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return; // only present on projects.html

  const body = document.getElementById('lightbox-body');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');
  const counter = document.getElementById('lightbox-counter');

  let currentMedia = null;
  let currentSlide = 0;

  function render() {
    if (!currentMedia) return;

    if (currentMedia.type === 'image') {
      body.innerHTML = `<img src="${currentMedia.src}" alt="${currentMedia.alt || ''}">`;
      prevBtn.classList.remove('show');
      nextBtn.classList.remove('show');
      counter.classList.remove('show');
    } else if (currentMedia.type === 'video') {
      body.innerHTML = `<video src="${currentMedia.src}" controls autoplay></video>`;
      prevBtn.classList.remove('show');
      nextBtn.classList.remove('show');
      counter.classList.remove('show');
    } else if (currentMedia.type === 'youtube') {
      body.innerHTML = `<iframe src="https://www.youtube.com/embed/${currentMedia.id}?autoplay=1" title="video" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
      prevBtn.classList.remove('show');
      nextBtn.classList.remove('show');
      counter.classList.remove('show');
    } else if (currentMedia.type === 'pdf') {
      // Browsers can render PDFs natively — no export or online viewer
      // needed, just embed it directly.
      const downloadHTML = currentMedia.src
        ? `<a class="lightbox-download" href="${currentMedia.src}" download target="_blank" rel="noopener">&#8681; Download PDF</a>`
        : '';
      body.innerHTML = `
        <div class="lightbox-slide-wrap">
          <iframe class="lightbox-pdf-embed" src="${currentMedia.src}" title="PDF preview"></iframe>
          ${downloadHTML}
        </div>`;
      prevBtn.classList.remove('show');
      nextBtn.classList.remove('show');
      counter.classList.remove('show');
    } else if (currentMedia.type === 'pptx' || currentMedia.type === 'slides') {
      const slides = currentMedia.slides || [];
      const hasSlides = slides.length > 0;

      const downloadHTML = currentMedia.src
        ? `<a class="lightbox-download" href="${currentMedia.src}" download target="_blank" rel="noopener">&#8681; Download Original File</a>`
        : '';

      if (hasSlides) {
        // Exported PNG slides — click-through viewer, works fully offline.
        body.innerHTML = `
          <div class="lightbox-slide-wrap">
            <img src="${slides[currentSlide]}" alt="Slide ${currentSlide + 1} of ${slides.length}">
            ${downloadHTML}
          </div>`;
        const multiple = slides.length > 1;
        prevBtn.classList.toggle('show', multiple);
        nextBtn.classList.toggle('show', multiple);
        counter.classList.toggle('show', multiple);
        counter.textContent = `Slide ${currentSlide + 1} of ${slides.length}`;

      } else if (currentMedia.type === 'pptx' && currentMedia.src) {
        // No exported slides — show the REAL PowerPoint via Microsoft's
        // free online viewer. Only works once this site is published at a
        // real web address (GitHub Pages, Netlify, etc.) — it can't reach
        // a file that's only sitting on your own computer.
        const fullUrl = new URL(currentMedia.src, window.location.href).href;
        const viewerUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(fullUrl)}`;
        body.innerHTML = `
          <div class="lightbox-slide-wrap">
            <iframe class="lightbox-office-embed" src="${viewerUrl}" title="PowerPoint preview" allowfullscreen></iframe>
            <p class="lightbox-embed-note">Preview blank? This only works once your site is live on the web — it won't load while testing locally. The download link below always works.</p>
            ${downloadHTML}
          </div>`;
        prevBtn.classList.remove('show');
        nextBtn.classList.remove('show');
        counter.classList.remove('show');

      } else {
        body.innerHTML = `
          <div class="lightbox-slide-wrap">
            <div class="lightbox-no-preview">
              <span class="file-icon">&#128196;</span>
              <p>No preview available for this file yet.</p>
            </div>
            ${downloadHTML}
          </div>`;
        prevBtn.classList.remove('show');
        nextBtn.classList.remove('show');
        counter.classList.remove('show');
      }
    }
  }

  function open(mediaId) {
    const media = (window.mediaLibrary || {})[mediaId];
    if (!media) return;
    currentMedia = media;
    currentSlide = 0;
    render();
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
  }

  function close() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    body.innerHTML = ''; // stops any playing video/audio
    currentMedia = null;
  }

  function nextSlide() {
    if (!currentMedia || !currentMedia.slides) return;
    currentSlide = (currentSlide + 1) % currentMedia.slides.length;
    render();
  }

  function prevSlide() {
    if (!currentMedia || !currentMedia.slides) return;
    currentSlide = (currentSlide - 1 + currentMedia.slides.length) % currentMedia.slides.length;
    render();
  }

  // Open when any thumbnail (current or future — accordions render after
  // this runs) is clicked, via event delegation on the whole document.
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.media-trigger');
    if (trigger) open(trigger.dataset.mediaId);
  });
  document.addEventListener('keydown', (e) => {
    const trigger = e.target.closest && e.target.closest('.media-trigger');
    if (trigger && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      open(trigger.dataset.mediaId);
    }
  });

  // Close on X, backdrop click, or Escape.
  lightbox.querySelectorAll('[data-close]').forEach((el) => {
    el.addEventListener('click', close);
  });
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  });

  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);
}

// ---- 5. Lightbulb (light/dark mode toggle) --------------------------------
function initThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initWobbleText();
  initAccordion();
  initFaceFallback();
  initLightbox();
  initThemeToggle();
});