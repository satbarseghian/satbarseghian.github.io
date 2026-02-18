// Tabs: software | data | uiux | hobbies | resume
const TABS = [
    { id: "software", label: "Software" },
    { id: "data", label: "Data" },
    { id: "uiux", label: "UI/UX" },
    { id: "hobbies", label: "Film/Photo" },
    { id: "resume", label: "Resume" }
  ];
  
  // Curated projects only (we can add more later)
  // Each project belongs to ONE tab via "tab"
  const PROJECTS = [
    // ---------------- SOFTWARE ----------------
    {
      id: "software-library",
      tab: "software",
      title: "Library Management System",
      year: "2024",
      blurb: "C++ program using data structures to manage a library: add, remove, search, and display books.",
      tags: ["C++", "Data Structures", "Engineering"],
      thumbnail: "assets/thumbs/PUT-LIBRARY-THUMB-IMAGE-HERE.jpg",
      media: { type: "image", src: "assets/images/PUT-LIBRARY-HERO-IMAGE-HERE.jpg", alt: "Library Management visual" },
      links: [
        { label: "GitHub Repo", href: "https://github.com/satbarseghian/Library-Management" }
      ],
      details:
  `What I built:
  - Add/remove/search/display flows
  - Structured data handling with a clean CLI
  
  What I’d improve next:
  - File persistence
  - Testing + refactor into modules`
    },
  
    {
      id: "software-mindreader",
      tab: "software",
      title: "Olaf’s Mindreader",
      year: "2025",
      blurb: "Team software project with product-style documentation and user onboarding.",
      tags: ["Team", "Product", "Docs"],
      thumbnail: "assets/thumbs/PUT-MINDREADER-THUMB-HERE.png",
      media: { type: "image", src: "assets/images/PUT-MINDREADER-HERO-HERE.png", alt: "Mindreader visual" },
      links: [
        { label: "GitHub Repo", href: "PUT-MINDREADER-GITHUB-REPO-LINK-HERE" },
        { label: "User Manual (PDF)", href: "assets/pdf/team-user-manual-olaf-s-mindreader-1.pdf" }
      ],
      details:
  `What I contributed:
  - Clear end-user documentation (setup → usage → key features)
  - Product thinking: making the experience understandable and usable`
    },
  
    {
      id: "software-quantum-identities",
      tab: "software",
      title: "Exploring Global Identities with Quantum Computing",
      year: "2025",
      blurb: "Final project exploring identity/movement using a quantum computing framing and mapping approach.",
      tags: ["Research", "Computing", "Communication"],
      thumbnail: "assets/thumbs/PUT-QUANTUM-THUMB-HERE.png",
      media: { type: "image", src: "assets/images/PUT-QUANTUM-HERO-HERE.png", alt: "Quantum project visual" },
      links: [
        { label: "PDF", href: "assets/pdf/Exploring Global Identities Using Quantum Computing.pdf" }
      ],
      details:
  `What this shows:
  - Ambitious topic + technical framing
  - Clear communication of a complex idea`
    },
  
    {
      id: "software-ethics",
      tab: "software",
      title: "Ethics of Software Design",
      year: "2025",
      blurb: "Final presentation on ethical considerations in software (impact, responsibility, tradeoffs).",
      tags: ["Ethics", "Professional", "Presentation"],
      thumbnail: "assets/thumbs/PUT-ETHICS-THUMB-HERE.png",
      media: { type: "image", src: "assets/images/PUT-ETHICS-HERO-HERE.png", alt: "Ethics presentation visual" },
      links: [
        { label: "PDF", href: "assets/pdf/Ethics of Software Design Final Presentation.pdf" }
      ],
      details:
  `Focus:
  - Real-world consequences of design decisions
  - Communicating risk, impact, and responsibility`
    },
  
    // ---------------- DATA ----------------
    {
      id: "data-disco-dashboard",
      tab: "data",
      title: "DiSCO Spring Semester Report (Dashboard)",
      year: "2025",
      blurb: "Visual dashboard summarizing key insights (Tableau).",
      tags: ["Tableau", "Visualization", "Reporting"],
      thumbnail: "assets/thumbs/PUT-DISCO-DASHBOARD-THUMB.png",
      media: { type: "image", src: "assets/images/PUT-DISCO-DASHBOARD-HERO.png", alt: "DiSCO dashboard" },
      links: [
        { label: "Open Dashboard Image", href: "assets/images/spring-report-2025-disco-1.png" },
        { label: "Tableau Link", href: "https://public.tableau.com/views/Book1_17533837528300/Dashboard1?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" }
      ],
      details:
  `What this shows:
  - Clean visual hierarchy
  - Turning data into a fast, understandable story
  - Strong presentation quality`
    },
  
    {
      id: "data-github-popularity",
      tab: "data",
      title: "GitHub Popularity Report",
      year: "2025",
      blurb: "Analysis of GitHub popularity trends with visual storytelling and takeaways.",
      tags: ["Analysis", "Visualization"],
      thumbnail: "assets/thumbs/PUT-GITHUB-REPORT-THUMB.png",
      media: { type: "image", src: "assets/images/PUT-GITHUB-REPORT-HERO.png", alt: "GitHub report visual" },
      links: [
        { label: "PDF", href: "assets/pdf/PUT-GITHUB-REPORT-PDF.pdf" },
        { label: "Code (GitHub)", href: "PUT-OPTIONAL-GITHUB-REPO-LINK-HERE" }
      ],
      details:
  `What’s inside:
  - Data wrangling + visuals
  - Narrative conclusions
  - Clear written summary`
    },
  
    {
      id: "data-covid-vaccines",
      tab: "data",
      title: "Covid Vaccines Report",
      year: "2025",
      blurb: "Report exploring vaccination behavior and related factors with clear analysis and writing.",
      tags: ["Analysis", "Writing", "Communication"],
      thumbnail: "assets/thumbs/PUT-COVID-THUMB.png",
      media: { type: "image", src: "assets/images/PUT-COVID-HERO.png", alt: "Covid report visual" },
      links: [
        { label: "PDF", href: "assets/pdf/PUT-COVID-PDF.pdf" }
      ],
      details:
  `What this shows:
  - Research question + framing
  - Structured analysis
  - Clear communication of findings`
    },
  
    {
      id: "data-statistical-modeling",
      tab: "data",
      title: "Statistical Modeling Project",
      year: "2025",
      blurb: "Statistical modeling project with evaluation and interpretation.",
      tags: ["Modeling", "Inference", "Reporting"],
      thumbnail: "assets/thumbs/PUT-MODELING-THUMB.png",
      media: { type: "image", src: "assets/images/PUT-MODELING-HERO.png", alt: "Modeling project visual" },
      links: [
        { label: "PDF", href: "assets/pdf/PUT-MODELING-PDF.pdf" }
      ],
      details:
  `Included to show:
  - Modeling workflow
  - Interpretation + explanation
  - Clean reporting`
    },
  
    // ---------------- UI/UX ----------------
    {
      id: "uiux-coming-soon",
      tab: "uiux",
      title: "UI/UX Case Study (Adding Next)",
      year: "2026",
      blurb: "I’m organizing UI/UX work into case studies (problem → process → outcome).",
      tags: ["Figma", "Case Study"],
      links: [
        { label: "Figma", href: "PUT-FIGMA-LINK-HERE" }
      ],
      details:
  `When added, this will include:
  - Problem + constraints
  - Wireframes → final
  - Key decisions + tradeoffs
  - What I learned`
    },
  
    // ---------------- FILM / PHOTO ----------------
    {
      id: "hobby-film-01",
      tab: "hobbies",
      title: "Film / Photo",
      year: "",
      blurb: "A small selection of personal visual work.",
      tags: ["Photo"],
      thumbnail: "assets/thumbs/film-01.jpg",
      media: { type: "image", src: "assets/images/film-01.jpg", alt: "Film/Photo" },
      links: []
    },
    {
      id: "hobby-film-02",
      tab: "hobbies",
      title: "Film / Photo",
      year: "",
      blurb: "More personal visual work.",
      tags: ["Photo"],
      thumbnail: "assets/thumbs/film-02.jpg",
      media: { type: "image", src: "assets/images/film-02.jpg", alt: "Film/Photo" },
      links: []
    },
  
    // ---------------- RESUME ----------------
    {
      id: "resume",
      tab: "resume",
      title: "Resume",
      year: "",
      blurb: "My resume (PDF).",
      tags: ["PDF"],
      links: [
        { label: "Open Resume (PDF)", href: "assets/pdf/Resume26 (3).pdf" }
      ],
      details: ""
    }
  ];
  
  
  const listEl = document.getElementById("projectList");
  const viewEl = document.getElementById("projectView");
  const tabButtons = Array.from(document.querySelectorAll(".tab"));
  
  let currentTab = "software";
  let currentSelectedId = null;
  
  function projectsForTab(tabId){
    return PROJECTS.filter(p => p.tab === tabId);
  }
  
  function renderList(selectedId){
    const items = projectsForTab(currentTab);
    listEl.innerHTML = "";
  
    if (!items.length){
      listEl.innerHTML = `<div style="padding:10px; color: rgba(245,245,247,.68);">No items yet.</div>`;
      return;
    }
  
    const list = document.createElement("div");
    list.className = "list";
  
    for (const p of items){
      const btn = document.createElement("button");
      btn.className = "item";
      btn.type = "button";
      btn.setAttribute("aria-selected", String(p.id === selectedId));
  
      const thumbHtml = p.thumbnail
        ? `<img src="${p.thumbnail}" alt="" />`
        : `<span>—</span>`;
  
      btn.innerHTML = `
        <div class="itemThumb">${thumbHtml}</div>
        <div class="itemMain">
          <div style="font-weight:750; font-size:14px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
            ${escapeHtml(p.title)}
          </div>
          <div class="itemMeta">
            <span>${escapeHtml(p.year || "")}</span>
            <span>${escapeHtml((p.tags && p.tags[0]) ? p.tags[0] : "")}</span>
          </div>
        </div>
      `;
  
      btn.addEventListener("click", () => selectProject(p.id));
      list.appendChild(btn);
    }
  
    listEl.appendChild(list);
  }
  
  function renderMedia(p){
    if (!p || !p.media) return "";
    if (p.media.type === "image") {
      return `
        <div class="media">
          <img src="${p.media.src}" alt="${escapeHtml(p.media.alt || p.title || "Project image")}" />
        </div>
      `;
    }
    if (p.media.type === "iframe") {
      return `
        <div class="media">
          <iframe src="${p.media.src}" title="${escapeHtml(p.media.alt || p.title || "Project media")}" allowfullscreen></iframe>
        </div>
      `;
    }
    return "";
  }
  
  function renderView(p){
    if (!p){
      viewEl.innerHTML = `<p class="projBlurb">Select an item on the left.</p>`;
      return;
    }
  
    // Special behavior for Resume tab: embed if you have a real PDF link
    if (p.id === "resume") {
      const resumeLink = (p.links && p.links[0] && p.links[0].href && p.links[0].href.includes(".pdf")) ? p.links[0].href : null;
  
      viewEl.innerHTML = `
        <h2 class="projTitle">${escapeHtml(p.title)}</h2>
        <p class="projBlurb">${escapeHtml(p.blurb || "")}</p>
  
        ${resumeLink ? `
          <div class="links">
            <a href="${resumeLink}" target="_blank" rel="noreferrer">Open Resume (PDF)</a>
          </div>
          <div class="media" style="margin-top:14px;">
            <iframe src="${resumeLink}" title="Resume PDF"></iframe>
          </div>
        ` : `
          <div class="links">${(p.links || []).map(l => `<a href="${l.href}" target="_blank" rel="noreferrer">${escapeHtml(l.label)}</a>`).join("")}</div>
          <details open>
            <summary>How to add your resume</summary>
            <div class="detailsBody">${formatMultiline(p.details || "")}</div>
          </details>
        `}
      `;
      return;
    }
  
    const tags = (p.tags || []).map(t => `<span class="tag">${escapeHtml(t)}</span>`).join("");
    const links = (p.links || []).map(l => {
      const href = l.href || "#";
      return `<a href="${href}" target="_blank" rel="noreferrer">${escapeHtml(l.label || "Link")}</a>`;
    }).join("");
  
    viewEl.innerHTML = `
      ${renderMedia(p)}
      <h2 class="projTitle">${escapeHtml(p.title)}</h2>
      <p class="projBlurb">${escapeHtml(p.blurb || "")}</p>
  
      <div class="tags">${tags}</div>
      <div class="links">${links}</div>
  
      ${p.details ? `
        <details>
          <summary>Expand details</summary>
          <div class="detailsBody">${formatMultiline(p.details)}</div>
        </details>
      ` : ""}
    `;
  }
  
  function selectProject(id){
    const p = PROJECTS.find(x => x.id === id);
    if (!p) return;
  
    currentSelectedId = id;
  
    viewEl.classList.add("is-switching");
    window.setTimeout(() => {
      renderList(id);
      renderView(p);
      requestAnimationFrame(() => viewEl.classList.remove("is-switching"));
    }, 140);
  }
  
  function setTab(tabId){
    currentTab = tabId;
  
    for (const b of tabButtons){
      b.classList.toggle("is-active", b.dataset.tab === tabId);
    }
  
    const items = projectsForTab(tabId);
    const firstId = items[0]?.id || null;
    currentSelectedId = firstId;
  
    renderList(firstId);
    renderView(items.find(x => x.id === firstId) || null);
  }
  
  function handleKeyNav(e){
    const tag = document.activeElement?.tagName?.toLowerCase();
    if (tag === "input" || tag === "textarea" || document.activeElement?.isContentEditable) return;
  
    const items = projectsForTab(currentTab);
    const ids = items.map(x => x.id);
    if (!ids.length) return;
  
    if (!currentSelectedId) currentSelectedId = ids[0];
  
    const idx = ids.indexOf(currentSelectedId);
    const hasIdx = idx !== -1;
  
    if (e.key === "ArrowDown"){
      e.preventDefault();
      const next = hasIdx ? ids[(idx + 1) % ids.length] : ids[0];
      selectProject(next);
    }
    if (e.key === "ArrowUp"){
      e.preventDefault();
      const prev = hasIdx ? ids[(idx - 1 + ids.length) % ids.length] : ids[0];
      selectProject(prev);
    }
    if (e.key === "Enter"){
      const details = viewEl.querySelector("details");
      if (details) details.open = !details.open;
    }
  }
  
  function escapeHtml(str){
    return String(str)
      .replaceAll("&","&amp;")
      .replaceAll("<","&lt;")
      .replaceAll(">","&gt;")
      .replaceAll('"',"&quot;")
      .replaceAll("'","&#039;");
  }
  
  function formatMultiline(text){
    return escapeHtml(text).replaceAll("\n","<br/>");
  }
  
  // Init
  (function init(){
    // Hook up tab clicks
    for (const b of tabButtons){
      b.addEventListener("click", () => setTab(b.dataset.tab));
    }
  
    // Start on Software
    setTab("software");
  
    // Keyboard nav
    document.addEventListener("keydown", handleKeyNav);
  })();
  