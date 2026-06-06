/* =====================================================
   BLACKBOLD — interactions
   ===================================================== */
(function () {
  "use strict";

  /* ---------- Work data ---------- */
  const PROJECTS = [
    {
      title: "Glow Serum Launch",
      industry: "beauty", platform: "tiktok",
      platformLabel: "TikTok Shop", industryLabel: "Beauty",
      grad: "g-beauty", icon: "uil-favorite",
      desc: "Hook-driven UGC for a serum drop.",
      challenge: "A new serum needed to break through a saturated skincare feed and convert cold TikTok Shop traffic without an established brand following.",
      approach: "Built a 3-second hook around a visible texture demo, scripted shade-match UGC, and produced a batch of native variants for rapid creative testing.",
      deliverables: ["12 short-form hooks (9:16)", "Before/after demo set", "Affiliate-ready creator cuts", "FTC-compliant on-screen disclosures"],
    },
    {
      title: "A+ Brand Story",
      industry: "beauty", platform: "amazon",
      platformLabel: "Amazon", industryLabel: "Beauty",
      grad: "g-beauty2", icon: "uil-image-v",
      desc: "Enhanced A+ content & Brand Store.",
      challenge: "A beauty seller's Amazon listing relied on flat images and under-converted against richer competitor pages.",
      approach: "Produced ingredient storytelling modules, comparison charts and a cohesive Brand Store with claims reviewed for FDA cosmetic compliance.",
      deliverables: ["A+ content modules", "Brand Store layout", "6 main + secondary images (white bg)", "Lifestyle hero set"],
    },
    {
      title: "Med-spa Trust Film",
      industry: "clinic", platform: "meta",
      platformLabel: "Meta / IG", industryLabel: "Clinic",
      grad: "g-clinic", icon: "uil-medical-square-full",
      desc: "Procedure explainer & testimonial.",
      challenge: "A med-spa needed paid social creative that built trust around a sensitive procedure without making medical guarantees.",
      approach: "Directed a calm, clinical testimonial film and a procedure explainer, written HIPAA-aware with carefully hedged claims.",
      deliverables: ["Testimonial film (Reels + Feed)", "Procedure explainer", "Carousel set", "Compliant caption copy"],
    },
    {
      title: "Clinic Listing Refresh",
      industry: "clinic", platform: "shopify",
      platformLabel: "Shopify", industryLabel: "Clinic",
      grad: "g-clinic2", icon: "uil-heart-medical",
      desc: "PDP video & lifestyle hero.",
      challenge: "A clinic's DTC product page felt cold and slow, hurting conversion on branded traffic.",
      approach: "Shot a brand-consistent lifestyle hero and a fast-loading PDP video tuned for mobile-first browsing.",
      deliverables: ["PDP hero video", "Lifestyle photo set", "Email header assets", "Optimized export bundle"],
    },
    {
      title: "Smart Device Demo",
      industry: "technology", platform: "amazon",
      platformLabel: "Amazon", industryLabel: "Technology",
      grad: "g-tech", icon: "uil-processor",
      desc: "Feature highlights & spec visuals.",
      challenge: "A tech brand's listing buried key features in text, leaving shoppers unsure how the product worked.",
      approach: "Produced a feature-highlight demo and spec visuals that made the hardware feel intuitive, all truth-in-advertising checked.",
      deliverables: ["Product demo video", "Spec visual series", "A+ feature modules", "Main image set"],
    },
    {
      title: "Unboxing Series",
      industry: "technology", platform: "tiktok",
      platformLabel: "TikTok Shop", industryLabel: "Technology",
      grad: "g-tech2", icon: "uil-box",
      desc: "Native unboxing for TikTok Shop.",
      challenge: "A gadget needed native-feeling TikTok content that didn't read like an ad.",
      approach: "Created a creator-style unboxing series with strong 3-second hooks and authentic pacing for affiliate amplification.",
      deliverables: ["Unboxing hooks", "Feature montage", "Affiliate creator cuts", "Live-stream B-roll"],
    },
    {
      title: "AI Assistant Onboarding",
      industry: "ai", platform: "meta",
      platformLabel: "Meta / IG", industryLabel: "AI Tools",
      grad: "g-ai", icon: "uil-robot",
      desc: "Value-prop animation & demo.",
      challenge: "An AI assistant struggled to explain its value in a crowded feed within seconds.",
      approach: "Built a use-case demo and a crisp value-prop animation with clear AI disclosure and data-privacy framing.",
      deliverables: ["Value-prop animation", "Use-case demo video", "Onboarding flow walkthrough", "Carousel explainer"],
    },
    {
      title: "Workflow Tool Walkthrough",
      industry: "ai", platform: "shopify",
      platformLabel: "Shopify", industryLabel: "AI Tools",
      grad: "g-ai2", icon: "uil-channel",
      desc: "Onboarding flow & feature reel.",
      challenge: "An AI SaaS DTC page needed to show, not tell, how the product fits into a daily workflow.",
      approach: "Produced a screen-led walkthrough and a feature reel optimized for fast load and brand consistency.",
      deliverables: ["Onboarding walkthrough", "Feature reel", "PDP loop", "Email asset set"],
    },
    {
      title: "Holiday Bundle Push",
      industry: "beauty", platform: "walmart",
      platformLabel: "Walmart", industryLabel: "Beauty",
      grad: "g-beauty3", icon: "uil-gift",
      desc: "Rich Media & listing imagery.",
      challenge: "A beauty bundle needed spec-driven Walmart Rich Media to stand out during the holiday rush.",
      approach: "Delivered spec-compliant listing imagery and Rich Media modules with a festive but on-brand look.",
      deliverables: ["Rich Media modules", "Listing image set", "Lifestyle bundle shots", "Promo variants"],
    },
  ];

  /* ---------- Render cards ---------- */
  const grid = document.getElementById("work-grid");
  const countEl = document.getElementById("work-count");
  const emptyEl = document.getElementById("work-empty");

  PROJECTS.forEach((p, i) => {
    const card = document.createElement("article");
    card.className = "work-card glass glass--interactive reveal";
    card.dataset.industry = p.industry;
    card.dataset.platform = p.platform;
    card.dataset.index = i;
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", "Open case study: " + p.title);
    card.innerHTML =
      '<div class="work-card__media ' + p.grad + '">' +
        '<span class="work-card__platform">' + p.platformLabel + "</span>" +
        '<span class="work-card__view"><i class="uil uil-arrow-up-right"></i></span>' +
        '<i class="uil ' + p.icon + ' work-card__icon"></i>' +
      "</div>" +
      '<div class="work-card__foot">' +
        '<span class="work-card__industry">' + p.industryLabel + "</span>" +
        '<h3 class="work-card__title">' + p.title + "</h3>" +
        '<p class="work-card__desc">' + p.desc + "</p>" +
      "</div>";
    grid.appendChild(card);
  });

  /* ---------- Dual filter ---------- */
  let activeIndustry = "all";
  let activePlatform = "all";

  function applyFilters() {
    let visible = 0;
    document.querySelectorAll(".work-card").forEach((card) => {
      const okI = activeIndustry === "all" || card.dataset.industry === activeIndustry;
      const okP = activePlatform === "all" || card.dataset.platform === activePlatform;
      const show = okI && okP;
      card.classList.toggle("hide", !show);
      if (show) visible++;
    });
    countEl.textContent = visible + (visible === 1 ? " project" : " projects");
    emptyEl.classList.toggle("show", visible === 0);
  }

  document.querySelectorAll(".filter-row").forEach((row) => {
    const group = row.dataset.group;
    row.querySelectorAll(".filter").forEach((btn) => {
      btn.addEventListener("click", () => {
        row.querySelectorAll(".filter").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        if (group === "industry") activeIndustry = btn.dataset.filter;
        else activePlatform = btn.dataset.filter;
        applyFilters();
      });
    });
  });
  applyFilters();

  /* ---------- Case study modal ---------- */
  const modal = document.getElementById("modal");
  const mTags = document.getElementById("modal-tags");
  const mTitle = document.getElementById("modal-title");
  const csChallenge = document.getElementById("cs-challenge");
  const csApproach = document.getElementById("cs-approach");
  const csDeliverables = document.getElementById("cs-deliverables");
  let lastFocus = null;

  function openModal(i) {
    const p = PROJECTS[i];
    if (!p) return;
    lastFocus = document.activeElement;
    mTags.innerHTML =
      '<span class="chip">' + p.industryLabel + "</span>" +
      '<span class="chip">' + p.platformLabel + "</span>";
    mTitle.textContent = p.title;
    csChallenge.textContent = p.challenge;
    csApproach.textContent = p.approach;
    csDeliverables.innerHTML = p.deliverables.map((d) => "<li>" + d + "</li>").join("");
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
    modal.querySelector(".modal__close").focus();
  }
  function closeModal() {
    modal.classList.remove("open");
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }

  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".work-card");
    if (card) openModal(+card.dataset.index);
  });
  grid.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      const card = e.target.closest(".work-card");
      if (card) { e.preventDefault(); openModal(+card.dataset.index); }
    }
  });
  modal.querySelectorAll("[data-close]").forEach((el) => el.addEventListener("click", closeModal));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
  });

  /* ---------- Mouse-tracked specular + tilt ---------- */
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion && window.matchMedia("(pointer: fine)").matches) {
    document.querySelectorAll(".glass--interactive").forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        el.style.setProperty("--mx", x + "px");
        el.style.setProperty("--my", y + "px");
        const rx = (0.5 - y / r.height) * 5;
        const ry = (x / r.width - 0.5) * 5;
        el.style.transform = "perspective(900px) rotateX(" + rx + "deg) rotateY(" + ry + "deg) translateY(-4px)";
      });
      el.addEventListener("mouseleave", () => { el.style.transform = ""; });
    });
  }

  /* ---------- Nav scroll state + active link ---------- */
  const nav = document.getElementById("nav");
  const sections = [].slice.call(document.querySelectorAll("main section[id]"));
  const navLinks = [].slice.call(document.querySelectorAll(".nav__link"));

  function onScroll() {
    nav.classList.toggle("is-scrolled", window.scrollY > 24);
    const y = window.scrollY + 120;
    let current = "";
    sections.forEach((s) => { if (y >= s.offsetTop) current = s.id; });
    navLinks.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + current));
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile drawer ---------- */
  const drawer = document.getElementById("drawer");
  document.getElementById("nav-open").addEventListener("click", () => {
    drawer.classList.add("open"); document.body.style.overflow = "hidden";
  });
  function closeDrawer() { drawer.classList.remove("open"); document.body.style.overflow = ""; }
  document.getElementById("nav-close").addEventListener("click", closeDrawer);
  drawer.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeDrawer));

  /* ---------- Theme toggle ---------- */
  const themeBtn = document.getElementById("theme-btn");
  const themeIcon = themeBtn.querySelector("i");
  function setTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    themeIcon.className = t === "light" ? "uil uil-moon" : "uil uil-sun";
    localStorage.setItem("bb-theme", t);
  }
  const saved = localStorage.getItem("bb-theme");
  if (saved) setTheme(saved);
  themeBtn.addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
    setTheme(next);
  });

  /* ---------- Reveal on scroll ---------- */
  if (!reduceMotion && "IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  } else {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
  }
})();
