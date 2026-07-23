/* ============================================================
   Project data — single source of truth for the grid,
   command palette, and per-project case-study pages.
   ============================================================ */

export const projects = [
  {
    slug: "sentinel-ai",
    name: "Sentinel AI",
    tagline: "Burp Suite for LLMs — an open-source AI security testing platform.",
    category: "AI Security",
    year: "2026",
    featured: true,
    accent: "#7c5cff",
    role: "Creator — solo design & build",
    links: [
      { label: "GitHub", href: "https://github.com/Afzalkhan001/Sentinel-Ai" },
    ],
    stack: ["FastAPI", "SQLAlchemy", "React 18", "Vite", "TypeScript", "Tailwind", "TanStack Query", "Recharts"],
    overview:
      "Sentinel AI is a security testing platform that finds vulnerabilities in AI language models, GitHub repositories, and websites — unified testing and scoring across three attack surfaces from a single dashboard.",
    highlights: [
      "51 curated attacks mapped to the OWASP LLM Top 10 across eight categories — prompt injection, jailbreaks, obfuscation, tool misuse, PII leakage, toxicity, and more",
      "Autonomous Red Team Agent: a planner → generator → executor → judge loop that iteratively adapts adversarial prompts until objectives are met",
      "0–100 security scoring with severity weighting and concrete remediation recommendations",
      "Supports OpenAI, Claude, Gemini, Groq, DeepSeek, Ollama, and custom HTTP endpoints — test your deployed chatbot, not just base models",
      "Attacks stored as plain YAML so the community can contribute without touching code",
    ],
    architecture:
      "Server-side execution keeps API keys off the client entirely — an in-memory key vault, async rate-limited attack runners, heuristic evaluation (refusal detection, PII/secret regexes) with optional LLM deep-review on top.",
  },
  {
    slug: "nori-ai-browser",
    name: "Nori",
    tagline: "An AI-native desktop browser whose sidebar can act on the page you're reading.",
    category: "AI Agents",
    year: "2026",
    featured: true,
    accent: "#38bdf8",
    role: "Creator — solo design & build",
    links: [
      { label: "GitHub", href: "https://github.com/Afzalkhan001/nori-ai-browser" },
    ],
    stack: ["Electron 33", "React 18", "TypeScript", "Tailwind v4", "Zustand", "OpenAI APIs", "CDP"],
    overview:
      "Nori is a full desktop browser with an agentic AI sidebar — not a chatbot bolted onto a webview. It searches, navigates, extracts data, fact-checks, and composes content grounded in the live page. Local-first: your keys, your data, no cloud backend, no telemetry.",
    highlights: [
      "Agentic chat grounded in the live page with tools for search, navigation, and extraction",
      "X-ray fact-checking that highlights claims on the page by credibility",
      "Total Recall — local semantic memory embeds every visited page for searchable history",
      "Natural-language data extraction to CSV with automatic pagination",
      "Missions: standing research goals that re-execute on a schedule",
      "Ad/tracker blocking, cookie-banner dismissal, and reader mode built in",
    ],
    architecture:
      "Clean Electron separation — main process owns IPC, persistence, and the AI engine (chat orchestration, tool definitions, Chrome DevTools Protocol control, semantic memory); the renderer is pure React. 98% TypeScript.",
  },
  {
    slug: "stride",
    name: "Stride",
    tagline: "A daily-progress companion that asks one question: are you actually moving forward?",
    category: "Mobile App",
    year: "2026",
    featured: true,
    accent: "#fbbf24",
    role: "Creator — solo design & build",
    links: [
      { label: "GitHub", href: "https://github.com/Afzalkhan001/stride" },
    ],
    stack: ["Expo SDK 57", "React Native 0.86", "TypeScript", "Reanimated 4", "Zustand", "EAS"],
    overview:
      "Stride replaces streak-counting with a living sky. The entire interface is an adaptive sky driven by your real location and time — and the sun's height tracks your momentum, a single 0–100 score built from progress, energy, and reflection.",
    highlights: [
      "Momentum engine: progress (50%), energy (28%), reflection (22%) — one honest number",
      "Adaptive sky rendered from real solar math (NOAA algorithms) — daylight, dusk, starfield",
      "Daily Story: prose summaries of wins and friction instead of checklists",
      "Friction engine detects recurring blockers and proposes if-then experiments",
      "Breathing exercises, activity tracking, and a decision vault — all fully on-device",
    ],
    architecture:
      "Fully local-first React Native app — no backend. Clear separation between screens, components, and library logic (momentum calculation, solar math, story composition). Ships via EAS with over-the-air updates.",
  },
  {
    slug: "pikoos",
    name: "PikoOS",
    tagline: "A complete desktop operating system experience — inside one browser tab.",
    category: "Web Experiment",
    year: "2025",
    featured: true,
    accent: "#34d399",
    role: "Creator — solo design & build",
    links: [
      { label: "GitHub", href: "https://github.com/Afzalkhan001/pikoos" },
    ],
    stack: ["Vanilla JS", "HTML", "CSS", "IndexedDB", "localStorage"],
    overview:
      "PikoOS is a browser-based desktop environment: boot screen, taskbar, draggable windows, file manager, terminal, media library, notes — all local-first, no backend, no accounts, no dependencies.",
    highlights: [
      "Window manager with draggable, minimizable, maximizable windows — in vanilla JS",
      "File manager with import/export, recycle bin, and folder metadata",
      "Working terminal: ls, cat, touch, mkdir, rm, open, theme, and more",
      "Media library playing audio, video, and images straight from IndexedDB",
      "Neo-brutalist design system, zero dependencies — four files total",
    ],
    architecture:
      "Deliberately minimal: index.html for the shell, one CSS design system, one app.js holding the window manager and every app. Metadata in localStorage, binary media in IndexedDB.",
  },
  {
    slug: "daily-mattr",
    name: "Daily Mattr",
    tagline: "An AI-powered personalized news platform — built end-to-end at Dridha Technologies.",
    category: "AI Product · Work",
    year: "2025–26",
    featured: true,
    accent: "#f472b6",
    role: "Built the entire platform — architecture, frontend, backend, and AI pipeline",
    links: [{ label: "Live — dailymattr.com", href: "https://dailymattr.com" }],
    stack: ["Next.js", "Supabase", "AI APIs", "PostgreSQL"],
    overview:
      "Daily Mattr turns the news firehose into a personal briefing: AI summarization, personalized recommendations, category feeds, and saved articles behind a modern mobile-first UI. I built the whole platform at Dridha Technologies, the IT startup formed by Tamada Media.",
    highlights: [
      "AI summarization pipeline condensing long-form articles into rapid-consumption briefs",
      "Personalized recommendation engine over category and reading-history signals",
      "Full product surface: onboarding, feeds, categories, saved articles",
      "Supabase backend with PostgreSQL — auth, storage, and data models",
    ],
    architecture:
      "Next.js app on a Supabase backend, with server-side AI summarization workflows feeding the personalized feed. Also designed the LongMattr sister property — the News Studio general section is my custom design end-to-end (longmattr.com/general).",
  },
  {
    slug: "kiwikoo",
    name: "Kiwikoo",
    tagline: "A virtual AI try-on platform connecting brands, influencers, and shoppers.",
    category: "AI Product · Work",
    year: "2026",
    featured: true,
    accent: "#a3e635",
    role: "All AI systems; designed the admin and brand dashboards",
    links: [],
    stack: ["Next.js", "Supabase", "Diffusion APIs", "PostgreSQL"],
    overview:
      "Kiwikoo lets shoppers try clothing on themselves with AI before buying — with an affiliate system, brand dashboard, influencer dashboard, and admin panel around it. In active development at Dridha Technologies; I own every AI component and designed the admin and brand surfaces.",
    highlights: [
      "Custom diffusion-based try-on pipeline conditioned on product attributes",
      "Image alignment, masking, and consistency handling tuned for realism over stylization",
      "Affiliate conversion flow connecting try-ons to purchases",
      "Multi-tenant dashboards: brands, influencers, and admin oversight",
    ],
    architecture:
      "Next.js + Supabase multi-tenant app. The try-on pipeline runs server-side: garment conditioning, person-image preprocessing, diffusion generation, and post-consistency checks before delivery.",
  },
  {
    slug: "shortly",
    name: "Shortly",
    tagline: "An automated news-intelligence system — scrape, summarize, deliver.",
    category: "AI Automation · Work",
    year: "2025",
    featured: true,
    accent: "#fb7185",
    role: "System design & architecture — scraping, rate limiting, summarization, dataflow",
    links: [],
    stack: ["Python", "FastAPI", "AI APIs", "Email delivery"],
    overview:
      "Shortly collects news from many sources, normalizes the chaos, and produces concise summaries delivered as email briefings. I designed the system architecture end-to-end: the scraping algorithms, rate limiting, summarization strategy, and the full dataflow. The web app version is entirely my build.",
    highlights: [
      "Source-specific scraping logic with respectful rate limiting",
      "Content normalization and cleaning across wildly inconsistent sources",
      "Prompt strategies tuned for concise, faithful summarization",
      "Email agent packaging summaries into scannable daily briefings",
    ],
    architecture:
      "Pipeline architecture: fetchers per source → normalization layer → summarization workers → delivery. Backpressure and rate limits at the fetch layer keep sources happy; the summarization layer is model-agnostic.",
  },
  {
    slug: "scoutly",
    name: "Scoutly",
    tagline: "AI influencer discovery — find relevant creators, not just big numbers.",
    category: "AI Automation",
    year: "2024",
    featured: false,
    accent: "#c084fc",
    role: "Creator — solo design & build",
    links: [{ label: "GitHub", href: "https://github.com/Afzalkhan001/Scoutly" }],
    stack: ["Next.js", "FastAPI", "Instaloader", "Serper API"],
    overview:
      "Scoutly automates influencer discovery: large-scale profile collection, Instagram analysis, and AI-assisted filtering that ranks creators by niche relevance and engagement quality rather than raw follower counts.",
    highlights: [
      "Search automation across creator niches",
      "Instagram profile analysis via Instaloader",
      "AI filtering to cut noise; relevance-based ranking logic",
    ],
    architecture:
      "Next.js frontend over a FastAPI service orchestrating scraping and AI scoring workers.",
  },
  {
    slug: "wikiwizard",
    name: "WikiWizard",
    tagline: "An AI Wikipedia assistant — search, explain, translate, chat.",
    category: "LLM App",
    year: "2024",
    featured: false,
    accent: "#60a5fa",
    role: "Creator — solo design & build",
    links: [],
    stack: ["Flask", "Gemini", "DeepSeek", "Wikipedia API"],
    overview:
      "WikiWizard wraps Wikipedia in an AI layer: search any topic, get plain-language AI explanations, translate them, and continue in a chat interface.",
    highlights: [
      "Wikipedia search with AI-generated explanations",
      "Multi-model backend across Gemini and DeepSeek",
      "Translation and conversational follow-ups",
    ],
    architecture: "Flask service bridging the Wikipedia API with LLM providers.",
  },
  {
    slug: "telugu-voice",
    name: "AI Telugu Voice Generator",
    tagline: "Production Telugu speech generation for content workflows at Tamada Media.",
    category: "AI Automation · Work",
    year: "2025",
    featured: false,
    accent: "#f97316",
    role: "Built for Tamada Media's content production",
    links: [],
    stack: ["Python", "TTS APIs", "Automation workflows"],
    overview:
      "A Telugu voice-generation system powering automated content production — AI speech wired into the workflows Tamada Media's teams use daily.",
    highlights: [
      "Telugu voice generation tuned for content production",
      "Automated end-to-end workflows from script to audio",
    ],
    architecture: "Pipeline from content input → TTS generation → production-ready audio assets.",
  },
  {
    slug: "pixagent",
    name: "PixAgent — AI News Scraper",
    tagline: "Automated article collection, AI generation, and summarization.",
    category: "AI Automation · Work",
    year: "2025",
    featured: false,
    accent: "#2dd4bf",
    role: "All scraping, AI generation, and summarization systems",
    links: [],
    stack: ["Python", "Scraping", "LLM APIs"],
    overview:
      "The automation engine behind news content operations: collects articles at scale, processes them, and produces AI-generated summaries ready for publishing pipelines.",
    highlights: [
      "Automated article scraping across sources",
      "AI generation and summarization for publishing workflows",
    ],
    architecture: "Scrape → clean → generate → publish pipeline with LLM workers.",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const getProject = (slug) => projects.find((p) => p.slug === slug);
