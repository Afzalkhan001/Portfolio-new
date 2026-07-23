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
    tagline: "AI security testing platform",
    context: "Personal",
    year: "2026",
    role: "Solo build — product design, engineering, and the red-team agent.",
    summary:
      "A security-testing platform for AI systems: an automated red-team agent probes LLM applications for weaknesses — prompt injection, jailbreaks, data leakage — and reports findings in structured evaluations.",
    overview: [
      "Teams ship LLM features faster than they test them. Sentinel AI exists to close that gap: point it at an AI application and its automated red-team agent runs adversarial probes against it — prompt injection attempts, jailbreak patterns, data-exfiltration probes — the attacks a real adversary would try first.",
      "Findings come back as structured evaluations rather than raw transcripts: what was attempted, what got through, and severity — so a team knows exactly what to fix before users find it. The platform is built as a React (Vite) dashboard over a FastAPI backend that orchestrates test runs against target LLM endpoints.",
    ],
    features: [
      "Automated red-team agent with adversarial probe library",
      "Prompt injection and jailbreak testing",
      "Structured evaluation reports with severity",
      "Dashboard for configuring and reviewing test runs",
    ],
    depth: [
      "Designed the probe framework so new attack patterns are additive, not rewrites",
      "Built evaluation logic that classifies model responses instead of eyeballing transcripts",
      "FastAPI orchestration layer manages test runs against arbitrary LLM endpoints",
    ],
    stack: ["React (Vite)", "FastAPI", "Python", "LLM APIs"],
    links: [{ label: "GitHub", href: "https://github.com/Afzalkhan001/Sentinel-Ai" }],
  },
  {
    slug: "stride",
    featured: true,
    n: "06",
    name: "Stride",
    tagline: "Daily-progress companion app",
    context: "Personal",
    year: "2026",
    role: "Solo build — concept, interface design, and engineering.",
    summary:
      "A mobile companion that turns daily progress into a ritual, built around a custom “living sky” interface that changes with the time of day.",
    overview: [
      "Most habit trackers feel like spreadsheets — and get abandoned like them. Stride approaches daily progress as something you inhabit rather than fill in: the app's signature “living sky” interface shifts through the day, giving each check-in a sense of time and place instead of a form to complete.",
      "It's built with Expo and React Native in TypeScript, with the interface engineered as a custom animated system rather than themed components — an exploration of how far product feel can carry daily-use software.",
    ],
    features: [
      "Daily progress tracking built as a repeatable ritual",
      "Living-sky interface that evolves through the day",
      "Native mobile experience via Expo",
      "Custom animation system, not themed components",
    ],
    depth: [
      "Designed and built the living-sky rendering as a custom animated layer",
      "Structured daily-loop state so streaks and progress survive offline use",
      "Tuned the interaction loop for a sub-minute daily check-in",
    ],
    stack: ["React Native", "Expo", "TypeScript"],
    links: [{ label: "GitHub", href: "https://github.com/Afzalkhan001/stride" }],
  },
  {
    slug: "nori-ai-browser",
    featured: true,
    n: "07",
    name: "Nori",
    tagline: "AI-native desktop browser",
    context: "Personal",
    year: "2026",
    role: "Solo build — concept, interface design, and engineering.",
    summary:
      "An Electron-based desktop browser where the AI assistant is part of the browsing surface itself — summarize, question, and act on any page without leaving it.",
    overview: [
      "Browser AI is usually bolted on — an extension panel that feels like a second application. Nori was built from the opposite premise: what does a browser look like if AI is native to the browsing surface? The assistant reads the page you're on, so summarizing an article, questioning a document, or extracting what matters happens in place, not in a separate chat window.",
      "The application is built on Electron with the OpenAI API powering comprehension, wrapped in a deliberately crafted luxury-editorial interface — proof that AI tooling doesn't have to look like a developer console.",
    ],
    features: [
      "AI assistant integrated into the browsing surface",
      "In-place page summarization and question answering",
      "Luxury-editorial custom interface",
      "Electron desktop application",
    ],
    depth: [
      "Built page-context extraction so the assistant grounds its answers in the live page",
      "Designed the assistant interaction to coexist with browsing instead of interrupting it",
      "Custom interface system built from scratch rather than component libraries",
    ],
    stack: ["Electron", "JavaScript", "OpenAI API"],
    links: [{ label: "GitHub", href: "https://github.com/Afzalkhan001/nori-ai-browser" }],
  },
  {
    slug: "pikoos",
    featured: true,
    n: "08",
    name: "Pikoos",
    tagline: "Rapid product experiment",
    context: "Personal",
    year: "2025",
    role: "Solo build.",
    summary:
      "A fast-cycle product experiment — practicing the discipline of taking an idea to a working MVP in days, not months.",
    overview: [
      "Part of my working method is keeping MVP speed sharp: taking a product idea from nothing to something usable in days. Pikoos is one of those cycles — a complete build used to pressure-test how quickly an idea can reach a real, working interface without sacrificing craft.",
    ],
    features: [
      "Complete idea-to-MVP cycle",
      "Production-quality interface on an experimental timeline",
    ],
    depth: [
      "Scoped ruthlessly — shipped the core loop first, everything else after",
    ],
    stack: ["Next.js"],
    links: [{ label: "GitHub", href: "https://github.com/Afzalkhan001/pikoos" }],
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
