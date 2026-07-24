/* ============================================================
   THE SYSTEMS LEDGER — all portfolio content lives here.
   Edit this file to update the site.
   ============================================================ */

export const profile = {
  name: "Afzal Khan",
  titles: ["AI Engineer", "AI Automation Engineer", "Full Stack AI Developer"],
  shortBio:
    "I build AI-powered products that solve real-world business problems. My work spans LLM applications, AI automation, web applications, intelligent agents, workflow automation, data pipelines, and modern full-stack development. I enjoy transforming complex ideas into products people can actually use.",
  about: [
    "I started by learning web development before moving into AI engineering and automation. Today I work on production AI systems — LLM applications, AI agents, automation systems, full-stack AI products, prompt engineering, API integrations, content automation, and AI workflows.",
    "I enjoy rapidly building MVPs, experimenting with new models, and solving business problems using AI.",
  ],
  email: "mdafzalkhan8326@gmail.com",
  socials: [
    { label: "Email", href: "mailto:mdafzalkhan8326@gmail.com", handle: "mdafzalkhan8326@gmail.com" },
    { label: "GitHub", href: "https://github.com/Afzalkhan001", handle: "@Afzalkhan001" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/afzal-khan-ab727022a/", handle: "/in/afzal-khan" },
  ],
};

export const experience = [
  {
    n: "01",
    role: "AI Engineer & Team Lead",
    company: "Tamada Media / Dridha Technologies",
    period: "Current",
    note: "First IT hire; Tamada Media formed IT startup Dridha Technologies",
    points: [
      "Leading the company’s AI initiatives",
      "Building internal AI products and production-ready AI tools",
      "Designing automation workflows and content pipelines",
      "Managing AI projects and integrating APIs and LLMs",
      "Researching new AI models",
      "Improving business productivity using AI",
    ],
  },
  {
    n: "02",
    role: "AI Trainer",
    company: "Outlier",
    period: "Previous",
    note: "Real-world LLM training work",
    points: [
      "LLM training and response evaluation",
      "Prompt engineering and AI model improvement",
      "Data annotation and quality evaluation",
      "Human feedback for AI",
    ],
  },
];

export const achievements = [
  "First IT hire at Tamada Media",
  "Built multiple production AI applications",
  "Led AI projects inside the company",
  "Worked on real-world LLM training at Outlier",
  "Experience across AI engineering, automation, and full-stack development",
];

export const services = [
  "AI Application Development",
  "AI Automation",
  "AI Chatbots",
  "Internal Business Tools",
  "Workflow Automation",
  "API Integrations",
  "Full Stack Development",
  "MVP Development",
  "AI Consulting",
];

export const skills = [
  {
    n: "01",
    title: "AI Engineering",
    items: ["GPT · Gemini · Claude", "Prompt Engineering", "AI Agents", "RAG", "LLM Applications", "Function Calling", "Structured Outputs"],
  },
  {
    n: "02",
    title: "AI Tools",
    items: ["OpenAI APIs", "Google Gemini", "OpenRouter", "Hugging Face", "DeepSeek", "Mistral", "LangChain (learning)"],
  },
  {
    n: "03",
    title: "Backend",
    items: ["Python", "FastAPI", "Flask", "REST APIs", "Authentication", "API Development"],
  },
  {
    n: "04",
    title: "Frontend",
    items: ["Next.js", "TypeScript", "JavaScript", "HTML · CSS", "Responsive Design"],
  },
  {
    n: "05",
    title: "Database",
    items: ["Supabase", "PostgreSQL", "SQL"],
  },
  {
    n: "06",
    title: "Dev & Other",
    items: ["Git · GitHub", "Vercel · Netlify", "Postman", "System Design", "Workflow Automation", "Team Leadership"],
  },
];

export const techStack = {
  AI: ["OpenAI", "Gemini", "Claude", "Hugging Face", "DeepSeek", "Mistral"],
  Frontend: ["Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  Backend: ["Python", "FastAPI", "Flask"],
  Database: ["PostgreSQL", "Supabase"],
  Deployment: ["Vercel", "Netlify"],
  "Version Control": ["Git", "GitHub"],
};

/* ── Projects ─────────────────────────────────────────────────
   featured: true → gets its own /work/[slug] case page.
   overview: professional case narrative (problem → system → build)
   depth: engineering decisions worth talking about
   Links shown only where permitted.                            */
export const projects = [
  {
    slug: "daily-mattr",
    featured: true,
    n: "01",
    name: "Daily Mattr",
    tagline: "AI-powered personalized news platform",
    context: "Dridha Technologies",
    year: "2026",
    role: "Built the entire platform end-to-end — architecture, frontend, backend, and AI integration. The NewStudio editorial section was custom-designed by me from Figma screens through to production.",
    summary:
      "A production news platform that turns high-volume publishing into a personalized daily reading experience, powered by an AI summarization and recommendation layer.",
    overview: [
      "News readers face the same problem everywhere: too many articles, too little signal. Daily Mattr addresses this by placing an AI layer between the newsroom and the reader — every article is summarized on ingestion, classified into categories, and ranked against each reader's interests before it reaches their feed.",
      "The product is built as a mobile-first web application on Next.js with a Supabase backend handling authentication, content storage, and reader-state (saved articles, preferences, reading history). The recommendation layer combines category affinity with reading behavior, so the feed improves the longer a reader uses it.",
      "Alongside the reader product, the platform includes NewStudio — a long-form editorial section with a fully custom design language, translated from Figma screens into production interfaces and live at longmattr.com/general.",
    ],
    features: [
      "AI summarization applied to every ingested article",
      "Personalized feed ranking from reader behavior and category affinity",
      "Category browsing, saved articles, and reading history",
      "Mobile-first responsive interface",
      "Custom-designed NewStudio long-form editorial section",
    ],
    impact: [
      "Replaced manual curation with an automated summarize–classify–rank pipeline",
      "Readers get a personalized daily read instead of scanning full feeds",
      "Shipped the entire platform end-to-end as a single engineer",
      "Custom editorial section delivered from Figma to production",
    ],
    confidential: true,
    stack: ["Next.js", "Supabase", "PostgreSQL", "AI APIs"],
    links: [
      { label: "dailymattr.com", href: "https://dailymattr.com" },
      { label: "longmattr.com/general", href: "https://longmattr.com/general" },
    ],
  },
  {
    slug: "kiwikoo",
    featured: true,
    n: "02",
    name: "Kiwikoo",
    tagline: "Virtual AI try-on commerce platform",
    context: "Dridha Technologies",
    year: "2026",
    role: "Engineered the complete AI try-on system, and designed the admin and brand-side experiences.",
    summary:
      "A virtual try-on platform for fashion commerce — shoppers see products on themselves before buying, while brands and influencers operate through dedicated dashboards connected by an affiliate system.",
    overview: [
      "Online fashion has a conversion problem: shoppers can't judge how a product will actually look on them. Kiwikoo solves this with an AI try-on engine that renders products onto a shopper's own photo realistically enough to support a purchase decision — realism, not stylization, is the constraint that shaped the entire pipeline.",
      "The try-on system handles the hard parts of the problem: garment alignment, masking, body-consistency, and preserving product detail through generation. Outputs are tuned for trust — a customer who sees an honest preview is a customer who doesn't return the product.",
      "Around the AI core sits a three-sided marketplace: brands list products and track performance through a brand dashboard, influencers drive traffic through an affiliate system with their own dashboard, and operations run through an admin panel. I designed the admin and brand-side experiences and built every part of the AI pipeline.",
    ],
    features: [
      "AI-powered virtual try-on tuned for realism",
      "Affiliate system linking influencers to conversions",
      "Brand dashboard with product and performance management",
      "Influencer dashboard with tracking and payouts",
      "Admin panel for full platform operations",
    ],
    impact: [
      "Shoppers evaluate products on themselves before buying — less guesswork, more confidence",
      "Brand–influencer collaboration runs through the platform instead of manual coordination",
      "Try-on outputs tuned for honest realism, supporting trust and fewer returns",
      "Three-sided marketplace operable by a small team via the admin panel",
    ],
    confidential: true,
    stack: ["Next.js", "Supabase", "AI APIs"],
    links: [],
  },
  {
    slug: "shortly",
    featured: true,
    n: "03",
    name: "Shortly",
    tagline: "Automated news intelligence engine",
    context: "Dridha Technologies",
    year: "2025",
    role: "Designed the system architecture end-to-end — the scraping algorithm, rate limiting, summarization algorithm, and complete data flow. The web application is fully built by me.",
    summary:
      "A production pipeline that monitors news sources continuously, normalizes what it finds, and delivers concise AI summaries — including an email agent that puts the digest directly in inboxes.",
    overview: [
      "Media teams spend hours every day reading, filtering, and condensing news. Shortly automates that entire workflow: it scrapes configured sources on schedule, cleans and normalizes inconsistent article formats into a canonical structure, and produces summaries tuned for fast consumption.",
      "The scraping layer is engineered for reliability at scale — source-specific extraction logic handles each publisher's quirks, and a rate-limiting system keeps collection fast without tripping source defenses. Every stage of the data flow, from fetch to summary, is designed to fail gracefully and recover without human intervention.",
      "Distribution is handled by an email agent that assembles and sends digests automatically, turning a manual editorial chore into a system that runs itself. The companion web application, built entirely by me, gives readers and operators a clean interface over the same pipeline.",
    ],
    features: [
      "Continuous multi-source news collection",
      "Source-specific extraction with adaptive rate limiting",
      "Content normalization into a canonical article structure",
      "AI summarization tuned for rapid consumption",
      "Automated email digest agent",
    ],
    impact: [
      "Compresses hours of daily source-reading into a delivered digest",
      "Runs unattended — collection through delivery with no manual step",
      "A failing source never blocks the pipeline; the digest still ships",
      "Freed the editorial workflow from repetitive monitoring and summarizing",
    ],
    confidential: true,
    stack: ["Python", "FastAPI", "AI APIs", "Next.js"],
    links: [],
  },
  {
    slug: "pixagent",
    featured: true,
    n: "04",
    name: "PixAgent",
    tagline: "AI content automation agent",
    context: "Dridha Technologies",
    year: "2026",
    role: "Built all AI systems — article scraping, AI generation, and summarization.",
    summary:
      "A content automation agent that feeds editorial pipelines: it collects source articles at scale, generates new drafts with AI, and produces summaries — turning raw material into publishable output.",
    overview: [
      "Content teams are bounded by how fast humans can read, rewrite, and condense. PixAgent removes that bound for the mechanical portion of the work: it ingests articles from configured sources, uses LLMs to generate fresh drafts grounded in that material, and summarizes at scale.",
      "The AI layer — scraping, generation, and summarization — is built to run unattended inside a production pipeline. Output is structured for downstream editorial use, so a human editor starts from a solid draft rather than a blank page.",
    ],
    features: [
      "Automated article scraping across sources",
      "LLM-based draft generation grounded in source material",
      "Bulk summarization for editorial workflows",
      "Structured output ready for downstream pipelines",
    ],
    impact: [
      "Editors start from structured AI drafts instead of blank pages",
      "Content processing scales beyond human reading speed",
      "Feeds editorial pipelines automatically, without manual handoffs",
    ],
    confidential: true,
    stack: ["Python", "AI APIs"],
    links: [],
  },
  {
    slug: "sentinel-ai",
    featured: true,
    n: "05",
    name: "Sentinel AI",
    tagline: "“Burp Suite for LLMs” — AI security testing platform",
    context: "Personal",
    year: "2026",
    role: "Solo build — product design, full-stack engineering, and the autonomous Red Team agent.",
    summary:
      "An open-source platform that security-tests AI models, code repos, and live websites — probing LLMs for prompt injection, jailbreaks, PII leakage, and toxicity, scanning repositories for secrets and vulnerabilities, and checking sites for common flaws, all scored against the OWASP Top 10.",
    overview: [
      "Sentinel AI is a three-in-one security platform for the AI era. It runs 51 research-grade adversarial attacks — Skeleton Key, Policy Puppetry, many-shot, obfuscation, and more — against any LLM or deployed chatbot endpoint; deep-scans GitHub repositories for hardcoded secrets across full git history, vulnerable dependencies via live CVE lookups, and insecure code patterns; and tests websites for missing security headers, exposed files, and injection flaws.",
      "Every scan produces a 0–100 security score mapped to the OWASP LLM/Web Top 10, paired with remediation advice. The standout feature is an autonomous Red Team agent — an attacker LLM that plans, executes, and adapts jailbreak attempts round-by-round until it breaches the target.",
      "The reliability engine uses order-aware, decode-aware detection with multi-sample voting and an optional LLM judge to keep verdicts trustworthy. It's built with React and FastAPI, containerized with Docker, and deployed live.",
    ],
    features: [
      "Three scanners in one — LLM/model testing, GitHub repo scanning, and website scanning under a shared dashboard and scoring",
      "51 built-in attacks across 8 categories, mapped to the OWASP LLM Top 10",
      "Autonomous Red Team agent that adapts its jailbreaks each round",
      "Deep repo scanning — full git-history secret detection, live CVE checks (OSV.dev), 20+ secret patterns",
      "Trustworthy scoring — order/decode-aware evaluation, multi-sample voting, optional LLM judge",
      "Deploy-ready — single-container Docker, guided onboarding, 45 automated tests + CI",
    ],
    depth: [
      "Reliability engine: order-aware, decode-aware detection with multi-sample voting keeps verdicts robust instead of one-shot guesses",
      "Autonomous Red Team agent plans, executes, and adapts attacks round-by-round until it breaches the target",
      "Full git-history secret scanning with 20+ patterns and live CVE lookups via OSV.dev",
      "Single-container Docker deploy with guided first-run onboarding and CI covering 45 automated tests",
    ],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "FastAPI", "Python", "SQLite", "Docker"],
    links: [
      { label: "Live Demo", href: "https://sentinel-ai-6xtg.onrender.com" },
      { label: "GitHub", href: "https://github.com/Afzalkhan001/Sentinel-Ai" },
    ],
  },
  {
    slug: "stride",
    featured: true,
    n: "06",
    name: "Stride",
    tagline: "Every day forward — a daily progress companion",
    context: "Personal",
    year: "2026",
    role: "End-to-end design and development — product direction, the adaptive theme system, the momentum algorithm, and the full React Native build.",
    summary:
      "A mobile self-care app built around a single 5-second daily check-in, where the entire interface is a living sky that tracks your real location and time of day and warms as your momentum builds. Fully on-device — no account, no cloud.",
    overview: [
      "Habit trackers count streaks. To-do apps count tasks. Neither answers the only question that matters: am I becoming the person I want to be? And most wellness apps are abandoned within 30 days — because when you're stressed, an app that makes you type and decide is friction you can't afford.",
      "Stride reduces the whole daily loop to one tap: open the app, tap how today felt, done. That single signal drives a momentum score (0–100) built on an evidence-based, three-pillar model — progress, energy, reflection — smoothed over time so one bad day never erases a good month. Deeper rituals — an aim, an evening reflection, breathing, workouts — are optional depth, never required.",
      "The interface itself is the feature: a phase-aware theme driven by the phone's real sunrise/sunset, computed on-device — bright morning light, burning-orange dusk, near-black night — with the momentum sun rising higher as you build. There are no streaks and no shame; miss days and the app simply says “the sky doesn't keep score.”",
    ],
    features: [
      "A 5-second daily check-in is the entire core loop",
      "Living-sky interface driven by the phone's real, on-device sunrise/sunset",
      "Momentum score (0–100) on an evidence-based progress · energy · reflection model",
      "No-guilt by design — no streaks, no shame for missed days",
      "Home-screen widget, liquid-glass navigation, native haptics, and an auto-written daily story",
      "Private by default — on-device storage with user-owned backup and export",
    ],
    depth: [
      "Adaptive theme system computes real sunrise/sunset locally from device location and time",
      "Momentum algorithm smooths daily signals so a single bad day never erases a good month",
      "Fully on-device state (Zustand + AsyncStorage) — no account, no server, no telemetry",
      "Reanimated-driven sky transitions and a crisp platform-native haptic language",
    ],
    stack: ["React Native", "Expo SDK 57", "TypeScript", "Expo Router", "Reanimated", "Zustand"],
    links: [
      { label: "Download APK", href: "https://drive.google.com/file/d/1paNuZz0L7Bu3zFkPahL0Qxsn4nnYDpns/view?usp=drivesdk" },
      { label: "GitHub", href: "https://github.com/Afzalkhan001/stride" },
    ],
  },
  {
    slug: "nori-ai-browser",
    featured: true,
    n: "07",
    name: "Nori",
    tagline: "An AI-native browser with hands — it reads the web with you and acts on it",
    context: "Personal",
    year: "2026",
    role: "Solo — product, architecture, and full implementation.",
    summary:
      "An AI-native desktop browser (Electron) where autonomous agents research, write, and complete multi-step tasks across real websites — local-first, private, and provider-agnostic.",
    overview: [
      "Nori is a full desktop browser with an AI sidebar that doesn't just chat — it acts. It reads the live page, searches the web, extracts data to CSV, drafts content in your voice, remembers everything you read, and runs autonomous agents that click, fill forms, and complete goals on real sites. Everything runs locally with your own API key; there's no backend and no telemetry.",
      "Describe a goal in plain English and Nori pursues it — on demand or on a schedule — taking real actions behind a human-approval safety gate. Reusable web workflows can be saved as teachable skills in plain language, and every page you read is embedded locally for instant semantic search of your own history.",
      "It's provider-agnostic and free to run: OpenRouter, Groq, Gemini, OpenAI, or a local Ollama model — bring your own key.",
    ],
    features: [
      "Autonomous agents that take real actions on live sites behind a human-approval gate",
      "Teachable skills — save reusable, parameterized web workflows in plain language",
      "Total recall — every page you read is embedded locally for instant semantic search",
      "AI studio — one-click summarize, analyze, compose, and extract structured data",
      "Provider-agnostic — OpenRouter, Groq, Gemini, OpenAI, or local Ollama",
    ],
    depth: [
      "Reliable web automation via the Chrome DevTools Protocol — DOM-direct clicking/typing that survives shadow DOM, SPAs, and lazy-rendered UIs where synthetic events fail",
      "Human-in-the-loop agent loop — tool-calling with approval gating, cost/round caps, and a hold-committing-actions safety model for unattended runs",
      "OAuth compatibility layer normalizes User-Agent client hints so Google/Microsoft sign-in works inside Electron",
      "Crash-safe local storage (atomic writes + backup recovery) and auto-updating installers via GitHub Actions CI",
    ],
    stack: ["Electron", "React 18", "TypeScript", "Tailwind CSS", "Zustand", "Chrome DevTools Protocol"],
    links: [
      { label: "Download", href: "https://github.com/Afzalkhan001/nori-ai-browser/releases/latest" },
      { label: "GitHub", href: "https://github.com/Afzalkhan001/nori-ai-browser" },
    ],
  },
  {
    slug: "pikoos",
    featured: true,
    n: "08",
    name: "PikoOS",
    tagline: "A browser-based desktop environment",
    context: "Personal",
    year: "2025",
    role: "Solo — design and full front-end engineering, from the window manager to every built-in app.",
    summary:
      "A persistent desktop-style workspace that runs entirely in the browser — movable windows, built-in apps, local files, and media tools, wrapped in a bold neo-brutalist interface. No backend, no account; everything lives on-device.",
    overview: [
      "PikoOS explores what an operating system can feel like when it's built entirely as a web application. Instead of a website with separate pages, it presents a persistent desktop workspace — movable windows, a taskbar, a launcher, notifications, file management, and settings — with system-level interactions inspired by Windows and Linux desktops.",
      "The whole environment wears a neo-brutalist visual system: high-contrast color, thick borders, pixel-like icons, hard shadows, and playful interface details that give it a distinct personality while keeping familiar desktop concepts intact.",
      "It ships a full suite of built-in apps — File Manager, Notes, a Terminal, Music Player, Gallery, Video Player, Calculator, Settings, and a Browser launcher — each running as a draggable, minimizable, maximizable window inside the desktop.",
    ],
    features: [
      "Desktop workspace with draggable, minimizable, maximizable, closable windows",
      "Boot experience, persistent taskbar with running-app indicators, and a start menu with app/file search",
      "Built-in apps: File Manager, Notes, Terminal, Music, Gallery, Video, Calculator, Settings, Browser",
      "Recycle Bin with restore, a notification center, and a desktop right-click context menu",
      "Terminal with real commands — ls, cat, touch, mkdir, rm, open, theme, date, and more",
      "Theme and accent-palette settings with local data export and desktop reset",
    ],
    depth: [
      "Local-first architecture — notes, settings, and metadata in localStorage; audio, images, and video in IndexedDB — so content persists with no backend or account",
      "Full window-management system: drag, stack order, minimize/maximize/close, and live taskbar state",
      "Media playback and file handling via Web Audio, HTML Media, and Browser File APIs, with Blob-based export and download",
      "Built from scratch in vanilla JavaScript — no framework — coordinating UI, storage, and application state",
    ],
    stack: ["HTML5", "CSS3", "Vanilla JavaScript", "IndexedDB", "LocalStorage", "Web APIs"],
    links: [
      { label: "Live Site", href: "https://pikoos.vercel.app/" },
      { label: "GitHub", href: "https://github.com/Afzalkhan001/pikoos" },
    ],
  },
  /* ── secondary projects (timeline only) ── */
  {
    slug: null,
    featured: false,
    n: "09",
    name: "WikiWizard",
    tagline: "AI-powered Wikipedia assistant",
    context: "Personal",
    year: "2025",
    summary:
      "Wikipedia research assistant combining search, AI explanations, translation, and a chat interface — built on Flask with Gemini and DeepSeek.",
    stack: ["Flask", "Gemini", "DeepSeek", "Wikipedia API"],
    links: [],
  },
  {
    slug: null,
    featured: false,
    n: "10",
    name: "AI Telugu Voice Generator",
    tagline: "AI speech for regional content production",
    context: "Tamada Media",
    year: "2025",
    summary:
      "Telugu voice generation integrated into automated workflows, bringing AI speech into the company's content production pipeline.",
    stack: ["Python", "AI Speech APIs"],
    links: [],
  },
  {
    slug: null,
    featured: false,
    n: "11",
    name: "AI PDF Guide Generator",
    tagline: "Automated document generation",
    context: "Tamada Media",
    year: "2025",
    summary:
      "Generates complete guides and documents from a brief using AI — structured drafting, formatting, and export without manual assembly.",
    stack: ["Python", "LLM APIs"],
    links: [],
  },
  {
    slug: null,
    featured: false,
    n: "12",
    name: "This Portfolio",
    tagline: "The Systems Ledger",
    context: "Personal",
    year: "2026",
    summary:
      "This site — an editorial-technical design system with animated schematics, page transitions, and a content-driven architecture.",
    stack: ["Next.js", "Framer Motion", "Tailwind"],
    links: [],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const getProject = (slug) => projects.find((p) => p.slug === slug);
