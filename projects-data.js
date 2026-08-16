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
    type: "image",
    src: "assets/projects/TD_SYNNEX.png"
  },

},

{
  title: "Undergraduate Teaching Assistant",
  meta: "Clemson: Fall 2024 - Spring 2026",
description: "CPSC 2120 Data Structures & Algorithms - Dr. Nicolas Widman <br> CPSC 2310 Computer Organization - Dr. Yvon Feaster <br><br> As a Teaching Assistant for two core computer science courses, I led weekly lab sessions and held in-person office hours. I helped students work through assignments, debug code, and strengthen their understanding of course concepts. I also graded coursework and broke down complex technical topics through one-on-one and group settings. <br><br> Concepts: C/C++, Data Structures, Sorting Algorithms, Linked Lists, DFS, BFS, Hashing, Graphs, Big-O Notation, Pointers, Memory Allocation, Assembly <br><br> Skills: Teaching, Technical Communication, Mentoring", media: { type: "image", src: "assets/projects/Clemson.png"}
   
},

{
  title: "Clemson Virtual Reality REU Research Assistant: Summer",
  meta: "Clemson: Summer, 2024",
description: "As part of a summer REU program, I worked with Dr. Alex Adkins, Dr. Ryan Canales, and Jackson Henry on research exploring interaction and perception in Virtual Reality. <br><br> Hand Size Perception in VR Charades: <br> I helped conduct a study investigating whether players notice subtle changes to their virtual hand size while playing a game of charades. I recruited participants, helped run study sessions, and collected participant responses. Pairs played charades in Virtual Reality across three phases while their virtual hand size was subtly increased or decreased. The study explored whether participants noticed these changes and whether altered hand sizes felt unnatural when their attention was focused on the game. <br><br> 3D Guitar Hand Modeling: <br> I worked with a 3D guitar and animated hand model in Maya to support further analysis of hand movement while playing a song. I extracted the hand model's root and joint data into CSV files, preparing the motion data for further evaluation and modeling. <br><br> Concepts: Virtual Reality, Research Studies, Data Collection, Data Analysis, 3D Modeling, Maya",  media: { type: "image", src: "assets/projects/Clemson.png"}
},

{
  title: "GSSM Resident GoSciTech Camp Helper",
  meta: "Clemson: Summer, 2023",
description: "GoSciTech Residential is a week-long summer camp hosted at GSSM, giving rising 8th, 9th, and 10th graders the opportunity to explore science and technology while experiencing life on campus. As a Residential Helper, I supported campers during Build a PC and Web Design sessions while helping maintain a safe and welcoming residential environment. I also organized icebreakers and group activities that encouraged campers to connect, feel comfortable, and stay engaged throughout the program. <br><br> Skills: Independence, Empathy, Teaching, HTML, CSS",    media: {
    type: "image",
    src: "assets/projects/GoSciTech.png"
  }
},
];

const personalProjects = [
  {
  title: "CUhackit 2027",
  meta: "Still Head of Partnerships...",
  description: "Coming Soon!",
  media: {
    type: "pptx",
    src: "assets/projects/CUHACKIT_2027_PITCH_DECK.pptx",
    slides: makeSlides("assets/projects/CUHACKIT_2027_PITCH_DECK", 8)
  }
},

  {
  title: "SCQuantum v3",
  meta: "Public Relations",
  description: "Coming Soon!",
  media: {
    type: "image",
    src: "assets/projects/SCQ3.png"
  }
},


  {
  title: "CUhackit 2026",
  meta: "Head of Partnerships",
description: "CUhackit is South Carolina's largest annual hackathon, bringing students together for 24 hours to build projects, collaborate with teammates, and compete in sponsored challenges. The organization also hosts Hello World, a hackathon for first-time hackers, and serves as a local host for the NASA Space Apps Challenge. <br><br> As Head of Sponsors, I lead sponsor outreach and help build relationships with companies interested in supporting CUhackit. I work with sponsors across our partnership tiers to secure funding and create opportunities for companies to engage directly with students through challenges, workshops, mentorship, and tabling. These partnerships help fund the event while giving participants opportunities to connect with industry professionals and gain experience beyond the classroom. <br><br> Event Analytics: <br> Participants: 285 <br> Universities Represented: 25+ <br> Industry Representatives: 50+ <br><br> Above is the sponsorship pitch deck we use when reaching out to prospective partners. Check it out for more details! <br><br> Skills: Sponsorship Outreach, Partnership Development, Communication, Event Leadership, Community Engagement, Team Collaboration",  
  linkedin: "https://lnkd.in/p/dmzDDU83",  
media: {
  type: "pptx",
    src: "assets/projects/CUHACKIT_2026_PITCH_DECK.pptx",
    slides: makeSlides("assets/projects/CUHACKIT_2026_PITCH_DECK", 10)
  }
},

{
  title: "Departmental Honors Thesis, Fall 2025 - Spring 2026",
  meta: "Leveraging Multilayer Perceptrons to compute Gradients for Identifying Genes Associated with Breast Cancer",
description: "Research Advisors: Dr. Alex Feltus & Dr. Siyu Huang <br> Course Coordinator: Bart Knijnenburg <br><br> Over this two-semester undergraduate research project, I developed and conducted an independent study under the mentorship of my research advisors. I designed the research approach, analyzed the results, wrote an undergraduate thesis, and presented my findings in a public setting. <br><br> My research explored how artificial intelligence could be used to identify genes associated with breast cancer. Using gene expression data from the GTEx and TCGA datasets, I developed a multilayer perceptron (MLP) classification model to distinguish between normal and tumor samples. I then used gradient-based attribution across 19,738 gene features to identify and rank the genes that had the greatest influence on the model's predictions. <br><br> After filtering and validating the identified genes through statistical testing and gene enrichment analysis, I found a gene set statistically associated with breast cancer and further investigated protein-protein interactions within the results. The project demonstrated how AI can help narrow large genomic datasets into smaller, biologically meaningful sets of genes for further research. <br><br> Skills: Artificial Intelligence, Genomics, Data Analysis, Statistical Analysis, Python, Research, Scientific Communication, Technical Writing, Presenting",
  media: {
    type: "pdf",
    src: "assets/projects/Varun_Sethi_Undergraduate_Thesis.pdf"
  }
},

{
  title: "Clemson Senior Capstone Project, Fall 2025",
  meta: "Capgemini - Supply Chain AI Inventory Detection",
  description: "Course Coordinator: Dr. Carrie Russell <br> Capgemini Representative: Eric Schumm <br><br> For my senior capstone project, I worked with a team of four other seniors and Capgemini to develop an AI-powered inventory detection system for warehouse environments. The goal was to help warehouse employees quickly determine inventory levels within individual storage bays without relying on manual counts. <br><br> We used an RF-DETR computer vision model to detect and count boxes within a simulated warehouse environment built in NVIDIA Omniverse. Detection results and captured images were then stored and displayed through a web application hosted on Microsoft Azure. We developed the front-end in React and built a C#/.NET client-server architecture to handle communication between the application and backend services. <br><br> Skills: C#, .NET, React, Microsoft Azure, Computer Vision, RF-DETR, NVIDIA Omniverse, Client-Server Architecture, Software Development",  
  linkedin: "https://lnkd.in/p/dKu9znMb",
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
description: "During this 24-hour hackathon, our team competed in the Entertainment track and won 1st place in Suno's Best Musical Hack challenge. We wanted to address a simple problem: musical instruments can be bulky and expensive, creating a barrier for people who just want an accessible way to learn and experiment with music. Our goal was to create something affordable, simple, and easy to use. <br><br> We created Penano, a virtual piano that lets users draw piano keys on paper and play them using their hands. We annotated and created our own dataset of hand-drawn notes to train a YOLOv8 computer vision model. Using OpenCV, we created bounding boxes around each detected note, while MediaPipe Hands tracked the user's fingertips in real time. When a fingertip entered a note's bounding box, the application played its corresponding musical frequency, turning a piece of paper into an interactive instrument. <br><br> Skills: Python, YOLOv8, OpenCV, MediaPipe, Computer Vision, Object Detection, Dataset Annotation, Team Collaboration",  
linkedin: "https://www.linkedin.com/posts/vsethi-in_another-semester-another-great-time-for-activity-7375861529155645447-WfkF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-_uv4BG6FOn9Z1vU3uGMn_61cq0OT3qzM",
media: {
    type: "pptx",
    src: "assets/projects/HACKMIT_2026.pptx",
    slides: makeSlides("assets/projects/HACKMIT_2026", 8)
  }
},

{
  title: "3rd Place - iQuHack 2025, Alice & Bob Challenge",
  meta: "Simulating Cat Qubit Dynamics",
description: "Despite entering the challenge with limited quantum computing experience, my team and I placed 3rd in the Alice & Bob challenge. We worked with Alice & Bob's cat qubit architecture and the Dynamiqs library to simulate cat qubit dynamics and explore how dissipative stabilization can help preserve quantum states. <br><br> We modeled system evolution using the Lindblad Master Equation and compared one-mode and two-mode systems using fidelity, observing how changes in dissipation affected the similarity between the models. We also explored gradient-based optimization using JAX and Optax's Adam optimizer to control system parameters and move the simulation toward a desired target state. Throughout the challenge, we used an Agile-inspired workflow with sprints, stand-ups, and a Kanban board to divide the research and implementation across our team. <br><br> Skills: Python, Quantum Computing, Dynamiqs, JAX, Optax, Quantum Simulation, Cat Qubits, Gradient-Based Optimization, Agile Development",  linkedin: "https://www.linkedin.com/posts/vsethi-in_last-weekend-my-team-and-i-had-the-honor-activity-7294535508880154624-K9f4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-_uv4BG6FOn9Z1vU3uGMn_61cq0OT3qzM",
  media: {
    type: "pptx",
    src: "assets/projects/IQuHack_Alice_and_Bob.pptx",
    slides: makeSlides("assets/projects/IQuHack_Alice_and_Bob", 19)
  }
},

{
  title: "CPSC 6420 - Artificial Intelligence Final",
  meta: "Clemson Undergraduate Student Government (CUSG) Chatbot",
description: "For CPSC 4420/6420, my partner and I developed a chatbot for Clemson Undergraduate Student Government to help senators navigate parliamentary procedure, governing documents, and Senate history more efficiently. Instead of searching through 13+ documents or relying on experienced members for guidance, users can ask questions directly and receive responses based on official CUSG materials. <br><br> We built a Retrieval-Augmented Generation (RAG) pipeline by chunking CUSG documents, creating vector embeddings with SentenceTransformers, and retrieving the most relevant information using FAISS. We also implemented our own Cosine, Euclidean, and Manhattan similarity methods to better understand how vector search works. The retrieved context is passed to Meta Llama 3 through Hugging Face to generate responses, with a Streamlit interface making the system accessible to users without technical experience. <br><br> Skills: Python, RAG, Large Language Models, FAISS, SentenceTransformers, Hugging Face, Meta Llama 3, Streamlit, Vector Embeddings",  media: {
    type: "pptx",
    src: "assets/projects/CPSC_6420_CUSG_CHATBOT.pptx",
    slides: makeSlides("assets/projects/CPSC_6420_CUSG_CHATBOT", 15)
  }
},

{
  title: "Guilty Gear Strive AI Bot",
  meta: "Personal Project - Summer 2025",
description: "Guilty Gear Strive is a 2D fighting game where players choose from a variety of characters and face off against an opponent. After repeatedly losing to my friends online, I decided to build a machine learning bot that could play the game for me. <br><br> To do this, I first needed the model to understand the current state of the match. I used OpenCV to track important game information such as health, tension, and burst. Since these gauges always appear in fixed locations, I created bounding boxes around each one and processed the image to estimate how much of each gauge was filled. For example, as the health bar decreased, the amount of detected color inside the box would also decrease, allowing me to estimate the remaining health as a percentage. <br><br> I also needed the model to know where both players were on the screen. I trained a custom YOLOv8 computer vision model using character sprites from the game, allowing it to detect both fighters and create bounding boxes around them. From these detections, I calculated the distance between the two characters and added that value to the game state. <br><br> Next, I defined the actions the model could take. Guilty Gear has a large number of possible inputs, including kicks, slashes, heavy attacks, movement, and directional combinations such as quarter-circle and half-circle inputs. To keep the project manageable, I focused on a single character and created a set of possible actions the model could perform. I also connected the program to keyboard controls so the bot could directly execute these inputs in-game. <br><br> I structured the project as a reinforcement learning environment using Gym, where the model receives the current game state, selects an action, and receives a reward based on the result. The main objective was to keep the bot's health above zero while learning which actions performed best in different situations. I also added the ability to save the current model and either continue training from an existing run or start over from scratch. <br><br> The biggest limitation was training time. Since I could not run many games in parallel or speed up the game environment, the model required more training than I could realistically provide. Because of this, I treated the project as an experimental reinforcement learning system rather than a fully trained competitive bot. <br><br> Will create a video one day, I need to reinstall the game <br><br> Concepts: Computer Vision, Reinforcement Learning, Object Detection, Game State Modeling, Reward Functions, Image Processing, Automation <br><br> Skills: Python, OpenCV, YOLOv8, GymAI",  
    media: { type: "image", src: "assets/projects/noimage.jpg"}

},

{
  title: "YQuantum 2025, BlueQubit Challenge",
  meta: "How Did We Ket Here?",
description: "During this quantum computing challenge, my team worked on simulating increasingly large quantum circuits and quickly ran into the limitations of traditional statevector simulation. We initially used Qiskit's AerSimulator locally, then moved to BlueQubit's simulator as circuit size and memory requirements increased. <br><br> To improve performance, we explored several simulation approaches, including statevector simulation, adjacency graphs, Matrix Product States, and tensor networks. We noticed that the entanglement structure in several problems was cyclic, which helped guide how we approached more efficient simulation. Our final approach used the Quimb library to build a tensor network simulator, where we implemented the necessary quantum gates and compared runtime performance against Qiskit Aer and BlueQubit. <br><br> Skills: Python, Quantum Computing, Qiskit, BlueQubit, Quimb, Tensor Networks, Matrix Product States, Quantum Circuit Simulation, Performance Optimization",  linkedin: "https://www.linkedin.com/posts/vsethi-in_a-couple-of-weeks-ago-my-team-and-i-participated-activity-7321240212167168000-pfhm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-_uv4BG6FOn9Z1vU3uGMn_61cq0OT3qzM",
  media: {
    type: "pptx",
    src: "assets/projects/How_Did_We_Ket_Here.pptx",
    slides: makeSlides("assets/projects/How_Did_We_Ket_Here", 10)
  }
},

{
  title: "SCQuantum v1 2024, IonQ Challenge",
  meta: "Quintum",
description: "During the IonQ Challenge, my team explored how quantum machine learning could be used for image classification. We started by comparing several quantum circuit designs, including QAOA, QCNN, Cross Orthogonal, Brickwork, and Butterfly Orthogonal ansatzes, and evaluated their performance across training accuracy, test accuracy, and runtime. <br><br> Our final model used a 4-qubit architecture combining an AngleEncoderY, a Butterfly Orthogonal Ansatz, and an interwoven Suzuki-Trotter circuit. We also tested different encoder rotations and training parameters to improve performance and reduce runtime. The final model achieved a 62% score.<br><br> Skills: Python, Quantum Computing, Quantum Machine Learning, IonQ, QAOA, QCNN, Quantum Circuits, Hyperparameter Tuning, Data Analysis",  
 media: {
    type: "pptx",
    src: "assets/projects/SCQuantum_IONQ.pptx",
    slides: makeSlides("assets/projects/SCQuantum_IONQ", 33)
  }
},

{
  title: "iQuHack 2026, Quantum Rings Challenge",
  meta: "Caught in |4>",
description: "During iQuHack 2026, my team worked on the Quantum Rings challenge, where we analyzed quantum circuits to predict the minimum simulation threshold needed to maintain fidelity and estimate circuit runtime. Rather than relying on simulation alone, we focused on extracting features directly from QASM files so our approach could generalize across different circuit types. <br><br> We analyzed circuit structure using features such as gate count, circuit depth, qubit count, two-qubit interactions, and entanglement metrics. We represented circuits as interaction graphs to measure bottlenecks such as maximum qubit degree and developed compound features that better captured overall circuit difficulty. One of our strongest metrics, Entanglement Progression, showed a 0.963 correlation with the minimum threshold.  <br><br> For threshold prediction, we experimented with linear regression and Random Forest models, then added correction logic to reduce underestimation on more difficult circuits. We also built a PyTorch neural network to explore runtime prediction from circuit features. <br><br> Skills: Python, Quantum Computing, QASM, PyTorch, Random Forest, Regression, Machine Learning, Feature Engineering, Graph Analysis, Data Analysis",  linkedin: "https://lnkd.in/p/dMGirHWF",
  media: {
    type: "pptx",
    src: "assets/projects/IQuHack_2026.pptx",
    slides: makeSlides_jpg("assets/projects/IQuHack_2026", 26)
  }
},


  {
    title: "GSSM x Clemson Summer SPRI Research",
    meta: "Determining if Hand Tracking Inside Virtual Reality (VR) can Withhold a Human Interaction",
description: "As part of a research project at Clemson, my team investigated whether hand tracking in Virtual Reality could support human interaction as effectively as traditional controllers. We built a VR charades experience in Unity using the Oculus Quest 2, where participants completed the same interaction task using both controllers and hand tracking. <br><br> The study included paired participants, timed charades rounds, pre- and post-surveys, and comparisons between controller-based and hand-tracked interaction. We also explored kinematics and inverse kinematics to understand how virtual hands and arms should move and respond inside the environment. <br><br> Due to the limited sample size, we were unable to draw statistically significant conclusions, but the project gave us insight into the usability challenges of VR hand tracking, including tracking reliability and limited field of view. <br><br> Skills: C#, Unity, Virtual Reality, Oculus Quest 2, Hand Tracking, Kinematics, Human-Computer Interaction, Research Study Design, Data Collection",
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

];


// ----------------------------------------------------------------------------------------------------------------------------------------------------------
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
 
function escapeAttr(str) {
  return String(str).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}
 
function stripTags(html) {
  return String(html).replace(/<[^>]*>/g, " ");
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
  // fills in when an item is clicked. Each item also carries a hidden
  // "data-search" string (title + meta + description) so the search bar
  // can match on more than just what's visibly shown in the list.
  const listHTML = list
    .map((project, i) => {
      const searchText = escapeAttr(
        stripTags(`${project.title} ${project.meta || ""} ${project.description || ""}`).toLowerCase()
      );
      return `
      <button class="project-list-item" data-index="${i}" data-search="${searchText}" type="button">
        <span class="pointer-icon" aria-hidden="true">&#128073;</span>
        <span class="project-list-title">${project.title}</span>
      </button>`;
    })
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
 
    const linksHTML =
      project.github || project.linkedin
        ? `<div class="detail-links">
            ${project.github ? `<a class="detail-link" href="${project.github}" target="_blank" rel="noopener">GitHub</a>` : ""}
            ${project.linkedin ? `<a class="detail-link" href="${project.linkedin}" target="_blank" rel="noopener">LinkedIn</a>` : ""}
          </div>`
        : "";
 
    detailEl.innerHTML = `
      <button class="detail-close" type="button" aria-label="Close">&times;</button>
      <h3>${project.title}</h3>
      ${project.meta ? `<div class="project-meta">${project.meta}</div>` : ""}
      <div class="detail-media">${mediaHTML(project.media)}</div>
      <p class="detail-description">${project.description}</p>
      ${linksHTML}`;
 
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