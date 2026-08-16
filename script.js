

// wobble ----------------------------------------------------
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

// Accordion (Projects page) ----------------------------------------
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

// Face photo placeholder fallback -----------------------------------
function initFaceFallback() {
  const img = document.querySelector('.face-frame img');
  const placeholder = document.querySelector('.face-placeholder');
  if (!img || !placeholder) return;
  img.addEventListener('error', () => {
    img.style.display = 'none';
    placeholder.style.display = 'block';
  });
}

// Lightbox  -------
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

  // Open when any thumbnail (current or future — accordions render after this runs) is clicked, via event delegation on the whole document.
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

// Lightbulb (light/dark mode toggle) --------------------------------
function initThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

// ---- 6. Project search (Projects page) ------------------------------------
function initProjectSearch() {
  const input = document.getElementById('project-search');
  const noResults = document.getElementById('search-no-results');
  if (!input) return; // only present on projects.html

  const sections = Array.from(document.querySelectorAll('.accordion-section'));

  input.addEventListener('input', () => {
    const query = input.value.trim().toLowerCase();
    let anyMatchAnywhere = false;

    sections.forEach((section) => {
      const items = Array.from(section.querySelectorAll('.project-list-item'));
      let sectionHasMatch = false;

      items.forEach((item) => {
        const matches = query === '' || (item.dataset.search || '').includes(query);
        item.style.display = matches ? '' : 'none';
        if (matches) sectionHasMatch = true;
      });

      if (query === '') {
        // Search cleared — restore normal visibility. Only auto-close a
        // section if WE were the ones who forced it open during a search.
        section.style.display = '';
        if (section.dataset.searchOpened === 'true') {
          section.classList.remove('open');
          delete section.dataset.searchOpened;
        }
      } else {
        section.style.display = sectionHasMatch ? '' : 'none';
        if (sectionHasMatch) {
          anyMatchAnywhere = true;
          if (!section.classList.contains('open')) {
            section.classList.add('open');
            section.dataset.searchOpened = 'true';
          }
        }
      }
    });

    if (noResults) {
      noResults.style.display = query !== '' && !anyMatchAnywhere ? 'block' : 'none';
    }
  });
}

// Secret
function initBadAppleEasterEgg() {
  const bulb = document.getElementById('theme-toggle');
  if (!bulb) return;

  const overlay = document.createElement('div');
  overlay.className = 'secret-overlay';
  overlay.innerHTML = `
    <canvas class="secret-canvas"></canvas>
    <video class="secret-video-source" src="assets/badapple.mp4" loop playsinline></video>
    <p class="secret-hint">click anywhere or press Esc to exit</p>
  `;
  document.body.appendChild(overlay);

  const canvas = overlay.querySelector('.secret-canvas');
  const ctx = canvas.getContext('2d');
  const video = overlay.querySelector('.secret-video-source');

  // Tiny offscreen canvas: the video gets drawn shrunk down to exactly
  // one pixel per character cell, so reading its pixel data gives us a
  // cheap "average brightness per cell" for the whole frame at once.
  const sampleCanvas = document.createElement('canvas');
  const sampleCtx = sampleCanvas.getContext('2d', { willReadFrequently: true });

  const CHARS = ' .:-=+*#%@'; // dark -> light. Edit this string to change the "shading" style.
  const CELL = 9; // pixels per character on screen — smaller = more detail, more work for the browser

  let rafId = null;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);

  function drawFrame() {
    if (!overlay.classList.contains('open')) return;

    const cols = Math.max(1, Math.floor(canvas.width / CELL));
    const rows = Math.max(1, Math.floor(canvas.height / CELL));

    if (sampleCanvas.width !== cols || sampleCanvas.height !== rows) {
      sampleCanvas.width = cols;
      sampleCanvas.height = rows;
    }

    sampleCtx.drawImage(video, 0, 0, cols, rows);

    let pixels;
    try {
      pixels = sampleCtx.getImageData(0, 0, cols, rows).data;
    } catch (err) {
      // Most likely cause: testing via file:// instead of a local server.
      // Reading pixel data needs the page served over http(s) — see the
      // note in projects-data.js about running `python3 -m http.server`.
      console.warn('Could not read video frame data:', err.message);
      rafId = requestAnimationFrame(drawFrame);
      return;
    }

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = `${CELL}px monospace`;
    ctx.textBaseline = 'top';

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const idx = (y * cols + x) * 4;
        const brightness = (pixels[idx] * 0.299 + pixels[idx + 1] * 0.587 + pixels[idx + 2] * 0.114) / 255;
        const ch = CHARS[Math.min(CHARS.length - 1, Math.floor(brightness * CHARS.length))];
        if (ch !== ' ') {
          ctx.fillStyle = `rgba(255,255,255,${0.35 + brightness * 0.65})`;
          ctx.fillText(ch, x * CELL, y * CELL);
        }
      }
    }

    rafId = requestAnimationFrame(drawFrame);
  }

  function open() {
    overlay.classList.add('open');
    resizeCanvas();
    video.currentTime = 0;
    video.muted = false;
    video.play().catch(() => {
      // Browsers sometimes block audio autoplay — fall back to muted so
      // the visual still works even if sound doesn't kick in immediately.
      video.muted = true;
      video.play().catch(() => {});
    });
    rafId = requestAnimationFrame(drawFrame);
  }
  function close() {
    overlay.classList.remove('open');
    video.pause();
    if (rafId) cancelAnimationFrame(rafId);
  }

  overlay.addEventListener('click', close);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });

  let clickTimes = [];
  bulb.addEventListener('click', () => {
    const now = Date.now();
    clickTimes = clickTimes.filter((t) => now - t < 2500);
    clickTimes.push(now);
    if (clickTimes.length >= 7) {
      clickTimes = [];
      open();
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initWobbleText();
  initAccordion();
  initFaceFallback();
  initLightbox();
  initThemeToggle();
  initProjectSearch();
  initBadAppleEasterEgg();
});