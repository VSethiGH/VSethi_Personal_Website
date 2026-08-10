YOUR PORTFOLIO SITE — HOW TO CUSTOMIZE IT
==========================================

Everything you need to change lives in a few obvious spots. You don't need
to know how to code to update this — just follow the steps below.

1) ADD YOUR PHOTO
   - Save a photo of yourself as "face.jpg" inside the "assets" folder
     (assets/face.jpg). It'll appear in the circle on the home page.
   - Until you add it, a placeholder message shows instead — nothing breaks.

2) ADD YOUR RESUME
   - Save your resume as a PDF named "resume.pdf" inside the "assets"
     folder (assets/resume.pdf). The Resume page will preview it and let
     visitors download it.

3) EDIT YOUR LINKEDIN / EMAIL
   - Open index.html, about.html, projects.html, and resume.html.
   - Near the top of each file, find the two lines that look like:
       <a class="icon-link" href="https://www.linkedin.com/in/your-profile">
       <a class="icon-link" href="mailto:you@example.com">
   - Replace the LinkedIn URL and email address with your real ones
     (they're the same two links repeated on every page).

4) EDIT YOUR "ABOUT ME" PAGE
   - Open about.html.
   - Each box (Profile, School, Clubs, Skills, etc.) is its own clearly
     marked section with "<!-- EDIT ME -->" comments. Just replace the
     bracketed placeholder text like [Your Name] with your real info.
   - Want a new box? Copy an entire block that starts with
       <div class="about-box"> ... </div>
     paste it, and edit the text.
   - Want to remove a box? Delete that whole block.

5) ADD / REMOVE PROJECTS, JOBS, OR AWARDS (the easy way)
   - Open projects-data.js — this is the ONLY file you need for the
     Projects page.
   - There are 3 lists: employedProjects, personalProjects, and awards.
   - Copy one of the { ... } example blocks, paste it into the right
     list, and fill in:
       title        -> name of the project/job/award
       meta         -> small gray subtitle (dates, role, etc.)
       description  -> a sentence or two
       media        -> { type: "image", src: "assets/projects/yourfile.jpg" }
                        or { type: "video", src: "assets/projects/yourfile.mp4" }
                        or { type: "youtube", id: "VIDEO_ID" }
                        or { type: "pptx", src: "assets/projects/deck.pptx" }
                        or { type: "slides", slides: ["assets/projects/slide-1.png", "assets/projects/slide-2.png"] }
                        or { type: "none" } if you don't have media yet
   - Drop your image/video files into assets/projects/ and point "src"
     at them.
   - Images open in a zoom viewer. Videos retain play controls and can be
     expanded. PPTX files can be opened/downloaded; add exported slide images
     in a "slides" array to enable previous/next slide navigation.
   - To remove an entry, just delete its { ... } block.

6) COLORS / FONT (optional)
   - All of the site's colors and fonts are defined once at the top of
     style.css under ":root { ... }". Change a value there and it
     updates everywhere.

7) HOW TO PREVIEW IT
   - Just double-click index.html to open it in your browser. All pages
     link to each other, so you can click around from there.

8) HOW TO PUT IT ONLINE (so you can send a link to employers)
   - The whole "site" folder can be uploaded as-is to a free static host
     like GitHub Pages, Netlify, or Vercel — drag-and-drop the folder in
     and you'll get a shareable link. No build step needed.

That's it! The whole site is plain HTML/CSS/JS on purpose — easy to read,
easy to edit, nothing fancy under the hood.
