/* =========================================================================
   PROJECTS DATA
   ---------------------------------------------------------------------
   THIS is the file you edit to add/remove projects. You never have to
   touch projects.html or the CSS.

   There are 3 lists below:
     - employedProjects   -> shows in the "Employed Projects" dropdown
     - personalProjects   -> shows in the "Personal Projects" dropdown
     - awards             -> shows in the "Rewards & Achievements" dropdown

   To ADD something: copy one of the { ... } blocks (including the comma
   after it) and paste it into the matching list, then edit the fields.

   To REMOVE something: delete its whole { ... } block (and its comma).

   FIELDS PER PROJECT CARD:
     title       - name of the project/job/award              (required)
     meta        - small gray line under the title, e.g. dates
                   or a role, "Jan 2025 – Present"             (optional, "" to skip)
     description - a sentence or two about it                  (required)
     media       - how to show the picture/video on the right. Pick ONE:
         { type: "image", src: "assets/projects/your-image.jpg", alt: "..." }
         { type: "video", src: "assets/projects/your-video.mp4" }
         { type: "youtube", id: "YOUTUBE_VIDEO_ID" }
         { type: "pptx", src: "assets/projects/your-deck.pptx" }
         { type: "pptx", src: "assets/projects/your-deck.pptx", slides: [
             "assets/projects/slides/your-deck/1.png",
             "assets/projects/slides/your-deck/2.png",
             "assets/projects/slides/your-deck/3.png"
           ] }
         { type: "none" }   -> shows a friendly "add an image" placeholder

   ABOUT THE "pptx" TYPE — you have two options:

   OPTION 1 (no extra work): just give a "src" pointing at your .pptx file.
   Clicking the thumbnail opens a popup showing the REAL PowerPoint via
   Microsoft's free online viewer — no exporting anything. The only catch:
   this only works once your site is live on the actual internet (GitHub
   Pages, Netlify, etc.) — it can't load a file that's just sitting on your
   own computer, so it'll look blank while you're testing locally.

   OPTION 2 (works offline too, a bit more manual): export each slide as
   an image (in PowerPoint: File > Export > Change File Type > PNG saves
   one image per slide), drop them in a folder — e.g.
   assets/projects/slides/your-deck/1.png, 2.png, 3.png — and list them in
   order under "slides". This gives a fast click-through viewer, and is
   used automatically instead of Option 1 whenever a "slides" array is
   present.

   Just drop your image/video files into the assets/projects folder and
   point "src" at them, e.g. "assets/projects/robot-arm.png".
   ========================================================================= */


const makeSlides = (folder, count) =>
  Array.from({ length: count }, (_, i) => `${folder}/${i + 1}.png`);

const makeSlides_jpg = (folder, count) =>
  Array.from({ length: count }, (_, i) => `${folder}/${i + 1}.jpg`);

const employedProjects = [
{
  title: "Inspire Conference Audio Transcrption + LLM Chatbot",
  meta: "TD SYNNEX - Technical Scholar II",
  description: "Current Work, Coming Soon . . .",
  media: {
    type: "none"
  },

},

{
  title: "Computer Organization Teaching Assistant",
  meta: "Clemson: Spring 2025, Fall 2026",
  description: "CPSC 2310 Computer Organization - Dr. Yvon Feaster <br><br> Each week, I led 1-hour in-person office hours and two 1-hour lab sessions. As a TA, I helped students with assigned labs, graded coursework, and explained core computer science concepts. <br><br> Concepts: C/C++, Linked Lists, Pointers, Memory Allocation, PPM, Assembly <br><br> Learned Skills: Teaching",
  media: { type: "image", src: "assets/projects/Clemson.png"}
   
},

{
  title: "Data Structures & Algorithms Teaching Assistant",
  meta: "Clemson: Fall 2024",
  description: "...",
  media: { type: "image", src: "assets/projects/Clemson.png"}
},

{
  title: "Clemson Virtual Reality REU Research Assistant: Summer",
  meta: "Clemson: Summer, 2024",
  description: "...",
  media: { type: "image", src: "assets/projects/Clemson.png"}
},

{
  title: "GSSM Resident GoSciTech Camp Helper",
  meta: "Clemson: Summer, 2023",
  description: "GoSciTech Residential is a week-long residential summer camp, serving rising 8th, 9th and 10th graders, hosted at GSSM. It provides students unmatched opportunities to explore science and technology while living on their campus. As a Residential Helper, I supported campers in Build a PC and Web Design sessions while helping create a safe and welcoming residential environment. I also organized icebreakers and activities to help campers connect, feel comfortable, and stay engaged throughout the program. <br><br> Skills Learned: Indepndence, Empathy, Teaching, HTML, CSS",
    media: {
    type: "image",
    src: "assets/projects/GoSciTech.png"
  }
},

  // Add more work projects below, following the same format:
  // {
  //   title: "Project Name",
  //   meta: "Your role — dates",
  //   description: "What you built and why it mattered.",
  //   media: { type: "image", src: "assets/projects/example.jpg", alt: "Screenshot of the project" }
  // },
];

const personalProjects = [
  {
  title: "CUhackit 2026",
  meta: "Head of Partnerships",
  description: "...",
  media: {
    type: "pptx",
    src: "assets/projects/CUHACKIT_2026_PITCH_DECK.pptx",
    slides: makeSlides("assets/projects/CUHACKIT_2026_PITCH_DECK", 10)
  }
},

{
  title: "Departmental Honors Thesis, Fall 2025 - Spring 2026",
  meta: "Leveraging Multilayer Perceptrons to compute Gradients for Identifying Genes Associated with Breast Cancer",
  description: "...",
  media: {
    type: "pdf",
    src: "assets/projects/Varun_Sethi_Undergraduate_Thesis.pdf"
  }
},

{
  title: "Clemson Senior Capstone Project, Fall 2025",
  meta: "Capgemini - Supply Chain AI Inventory Detection",
  description: "...",
  media: {
    type: "pptx",
    src: "assets/projects/Capgemini_Senior_Capstone_Project.pptx",
    slides: makeSlides(
      "assets/projects/Capgemini_Senior_Capstone_Project",
      10
    )
  }
},

{
  title: "1st Place - HackMIT 2026, Suno Challenge",
  meta: "Penano",
  description: "...",
  media: {
    type: "pptx",
    src: "assets/projects/HACKMIT_2026.pptx",
    slides: makeSlides("assets/projects/HACKMIT_2026", 8)
  }
},

{
  title: "3rd Place - iQuHack 2025, Alice & Bob Challenge",
  meta: "Simulating Cat Qubit Dynamics",
  description: "...",
  media: {
    type: "pptx",
    src: "assets/projects/IQuHack_Alice_and_Bob.pptx",
    slides: makeSlides("assets/projects/IQuHack_Alice_and_Bob", 19)
  }
},

{
  title: "CPSC 6420 - Artificial Intelligence Final",
  meta: "Clemson Undergraduate Student Government (CUSG) Chatbot",
  description: "...",
  media: {
    type: "pptx",
    src: "assets/projects/CPSC_6420_CUSG_CHATBOT.pptx",
    slides: makeSlides("assets/projects/CPSC_6420_CUSG_CHATBOT", 15)
  }
},

{
  title: "Guilty Gear Strive AI Bot",
  meta: "Personal Project - Summer 2025",
  description: "...",
  media: {
    type: "none"
  }
},

{
  title: "YQuantum 2025, BlueQubit Challenge",
  meta: "How Did We Ket Here?",
  description: "...",
  media: {
    type: "pptx",
    src: "assets/projects/How_Did_We_Ket_Here.pptx",
    slides: makeSlides("assets/projects/How_Did_We_Ket_Here", 10)
  }
},

{
  title: "iQuHack 2026, Quantum Rings Challenge",
  meta: "Caught in |4>",
  description: "...",
  media: {
    type: "pptx",
    src: "assets/projects/IQuHack_2026.pptx",
    slides: makeSlides_jpg("assets/projects/IQuHack_2026", 26)
  }
},


  {
    title: "GSSM x Clemson Summer SPRI Research",
    meta: "Determining if Hand Tracking Inside Virtual Reality (VR) can Withhold a Human Interaction",
    description: "...",
    media: {
      type: "pptx",
      src: "assets/projects/SPRI_VR_RESEARCH.pptx",
      slides: makeSlides("assets/projects/SPRI_VR_RESEARCH", 13)
    }
  },

  {
    title: "Personal Website",
    meta: "Wow! You are here right now.",
    description: "<hre",
    media: {
      type: "image",
      src: "assets/projects/ThumbsUp.jpg"
    }
  },

  // Add more personal projects below:
  // {
  //   title: "Project Name",
  //   meta: "Context or dates",
  //   description: "A sentence or two about it.",
  //   media: { type: "video", src: "assets/projects/demo.mp4" }
  // },
];

const awards = [
  {
    title: "Amazon Web Services Cloud Practitioner Certification (CFL-02)",
    meta: "Achieved July 2026",
    description: "The AWS Certified Cloud Practitioner (CLF-C02) exam is intended for individuals who can effectively demonstrate overall knowledge of the AWS Cloud, independent of a specific job role.",
    media: { type: "image", src: "assets/projects/aws.jpg"}
  },

  {
    title: "S.C. LIFE Scholarship",
    meta: "Undergraduate",
    description: "The Legislative Incentive for Future Excellence (LIFE) Scholarship was established to increase the number of students in the state majoring in STEM, to make higher education more accessible, and to improve the employability of South Carolina students.",
    media: { type: "image", src: "assets/projects/life.png"}
  },

  {
    title: "William P. Clyburn Memorial Scholarship",
    meta: "Undergraduate",
    description: "Endowed in 2001 in memory of William Porter Clyburn and Ruby Clyburn.",
    media: { type: "image", src: "assets/projects/noimage.jpg"}
  },

  {
    title: "Undergraduate Presidental's List",
    meta: "Fall 2023, Spring 2024, Spring 2025, Spring 2026",
    description: "The President’s List is awarded to those who achieve a 4.0 grade point average on a minimum of 12 semester hours, exclusive of Pass/No Pass coursework.",
    media: { type: "image", src: "assets/projects/Clemson.png"}
  },

  {
    title: "Undergraduate Dean's List",
    meta: "Fall 2023 - Spring 2026",
    description: "The Dean’s List is awarded to those who achieve a 3.5 grade point average on a minimum of 12 semester hours, exclusive of Pass/No Pass coursework.",
    media: { type: "image", src: "assets/projects/Clemson.png"}
  },
  // Add more awards/rewards below:
  // {
  //   title: "Award Name",
  //   meta: "When you got it",
  //   description: "What it was for.",
  //   media: { type: "image", src: "assets/projects/award.jpg", alt: "Award certificate" }
  // },
];


/* ---------------------------------------------------------------------
   Rendering logic below — you shouldn't need to touch this part.
 
   window.mediaLibrary holds the full data for every clickable thumbnail
   on the page, keyed by a unique id. script.js reads from this when the
   lightbox needs to know what to show full-size.
--------------------------------------------------------------------- */

window.mediaLibrary = {};
let mediaCounter = 0;
 
function mediaHTML(media) {
  if (!media || media.type === "none") {
    return `<div class="media-placeholder">Add a photo, screenshot, video, or slides here</div>`;
  }
 
  const id = `media-${mediaCounter++}`;
  window.mediaLibrary[id] = media;
 
  if (media.type === "image") {
    return `<div class="media-trigger" data-media-id="${id}" role="button" tabindex="0" aria-label="View larger image">
      <img src="${media.src}" alt="${media.alt || ""}" onerror="this.closest('.media-trigger').outerHTML='<div class=&quot;media-placeholder&quot;>Image not found — check the path in projects-data.js</div>'">
      <span class="zoom-hint">&#128269;</span>
    </div>`;
  }
  if (media.type === "video") {
    return `<div class="media-trigger" data-media-id="${id}" role="button" tabindex="0" aria-label="Play video">
      <video src="${media.src}" muted preload="metadata"></video>
      <span class="zoom-hint">&#9654;</span>
    </div>`;
  }
  if (media.type === "youtube") {
    return `<div class="media-trigger" data-media-id="${id}" role="button" tabindex="0" aria-label="Play video">
      <img src="https://img.youtube.com/vi/${media.id}/hqdefault.jpg" alt="${media.alt || "Video thumbnail"}">
      <span class="zoom-hint">&#9654;</span>
    </div>`;
  }
  if (media.type === "pdf") {
    return `<div class="media-trigger" data-media-id="${id}" role="button" tabindex="0" aria-label="View PDF">
      <div class="file-thumb"><span class="file-icon">&#128196;</span><span>PDF Document</span></div>
      <span class="zoom-hint">&#128269; View</span>
    </div>`;
  }
  if (media.type === "pptx" || media.type === "slides") {
    const hasSlides = media.slides && media.slides.length > 0;
    const hasFile = !!media.src;
 
    if (!hasSlides && !hasFile) {
      return `<div class="media-placeholder">Add slide images or a file in projects-data.js</div>`;
    }
 
    // Clicking always opens the lightbox to VIEW it — never triggers a
    // download by itself. Downloading is an optional button inside the
    // popup (see script.js).
    const thumbnail = hasSlides
      ? `<img src="${media.slides[0]}" alt="${media.alt || "Slide preview"}">`
      : `<div class="file-thumb"><span class="file-icon">&#128196;</span><span>PowerPoint Deck</span></div>`;
 
    return `<div class="media-trigger" data-media-id="${id}" role="button" tabindex="0" aria-label="View slides">
      ${thumbnail}
      <span class="zoom-hint">&#128269; View</span>
    </div>`;
  }
  return `<div class="media-placeholder">Add a photo, screenshot, video, or slides here</div>`;
}
 
function renderSection(prefix, list) {
  const container = document.getElementById(`panel-${prefix}`);
  if (!container) return;
 
  if (!list || list.length === 0) {
    container.innerHTML = `<div class="empty-note">Nothing here yet — add an entry in projects-data.js.</div>`;
    return;
  }
 
  // Left column: just a title + pointing-hand cursor per item, per the
  // "keep the list simple" request. Right column: full detail panel that
  // fills in when an item is clicked.
  const listHTML = list
    .map(
      (project, i) => `
      <button class="project-list-item" data-index="${i}" type="button">
        <span class="pointer-icon" aria-hidden="true">&#128073;</span>
        <span class="project-list-title">${project.title}</span>
      </button>`
    )
    .join("");
 
  container.innerHTML = `
    <div class="project-split">
      <div class="project-list">${listHTML}</div>
      <div class="project-detail">
        <button class="detail-close" type="button" aria-label="Close">&times;</button>
        <div class="detail-placeholder">
          <span class="pointer-icon big" aria-hidden="true">&#128073;</span>
          <p>Pick a project on the left to see the details.</p>
        </div>
      </div>
    </div>`;
 
  const listEl = container.querySelector(".project-list");
  const detailEl = container.querySelector(".project-detail");
 
  function showProject(i) {
    const project = list[i];
 
    listEl.querySelectorAll(".project-list-item").forEach((btn) => {
      btn.classList.toggle("active", Number(btn.dataset.index) === i);
    });
 
    detailEl.innerHTML = `
      <button class="detail-close" type="button" aria-label="Close">&times;</button>
      <h3>${project.title}</h3>
      ${project.meta ? `<div class="project-meta">${project.meta}</div>` : ""}
      <div class="detail-media">${mediaHTML(project.media)}</div>
      <p class="detail-description">${project.description}</p>`;
 
    detailEl.classList.add("open");
    detailEl.querySelector(".detail-close").addEventListener("click", () => {
      detailEl.classList.remove("open");
    });
  }
 
  listEl.querySelectorAll(".project-list-item").forEach((btn) => {
    btn.addEventListener("click", () => showProject(Number(btn.dataset.index)));
  });
 
  detailEl.querySelector(".detail-close").addEventListener("click", () => {
    detailEl.classList.remove("open");
  });
 
  // On wider screens the detail panel sits inline, so pre-select the
  // first project rather than showing an empty panel. On narrow screens
  // the panel is a full-screen popup, so leave it closed until tapped.
  if (window.matchMedia("(min-width: 701px)").matches) {
    showProject(0);
  }
}
 
document.addEventListener("DOMContentLoaded", () => {
  renderSection("employed", employedProjects);
  renderSection("personal", personalProjects);
  renderSection("awards", awards);
});