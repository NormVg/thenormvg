/**
 * portfolio.config.js
 * ─────────────────────────────────────────────────────────────
 * Single source of truth for all portfolio content.
 * Edit this file to update your portfolio - no component editing required.
 * ─────────────────────────────────────────────────────────────
 */

// ── Identity ──────────────────────────────────────────────────
export const identity = {
  name: "Vishnu Gupta",
  subtitle: "FULL-STACK DEVELOPER · PRODUCT BUILDER · AI EXPERIMENTER",
  description:
    "Crafting digital experiences that merge clean aesthetics with robust engineering. Currently building tools for the future at",
  descriptionLinkText: "TheAlphaOnes",
  descriptionLinkHref: "https://taohq.org",
  github: "https://github.com/NormVg",
  githubHandle: "@NormVg",
  twitter: "https://twitter.com/TheNormVg",
  linkedin: "https://www.linkedin.com/in/vishnu-gupta-ji/",
  youtube: "https://www.youtube.com/@thenormvg",
  email: "mailto:thenormvg.work@gmail.com",
};

// ── About ─────────────────────────────────────────────────────
export const about = {
  paragraphs: [
    "I'm a developer and designer who switched to computer science in 2021 and never looked back. I enjoy building products, experimenting with new ideas, and exploring the intersection of design and technology.",
    `Currently focused on building <a href="https://taohq.org" target="_blank">TheAlphaOnes</a> — a startup in the making focused on creating products that shape the lifestyle of the future. Along the way I've won hackathons, judged them, taught classes, and somehow earned the nickname Batman.`,
  ],
};

// ── Tech Stack ────────────────────────────────────────────────
export const techStack = [
  {
    name: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Go", "SQL", "HTML/CSS"],
  },
  {
    name: "Frontend",
    items: [
      "Vue.js",
      "Nuxt",
      "React",
      "React Native",
      "Tailwind CSS",
      "Three.js",
      "Figma",
    ],
  },
  {
    name: "Backend & Auth",
    items: [
      "Node.js",
      "Hono",
      "Express",
      "Go",
      "Postgres",
      "Redis",
      "Drizzle ORM",
      "Supabase",
      "Better Auth",
    ],
  },
  {
    name: "AI & Tools",
    items: [
      "Ollama",
      "AI SDK",
      "Langchain",
      "OpenAI",
      "Git",
      "Docker",
      "Vercel",
      "Cloudflare",
      "Electron",
      "OpenRouter",
    ],
  },
  {
    name: "Hardware & IoT",
    items: [
      "IoT",
      "Arduino",
      "ESP32",
      "Raspberry Pi",
      "OLED Screens",
      "Servos",
      "Sensors",
    ],
  },
];

// ── Education ─────────────────────────────────────────────────
export const education = [
  {
    degree: "B.Tech – Computer Science & Engineering",
    institution: "Manipal University Jaipur",
    period: "2025 – 2029",
    note: "Focused on software engineering, systems, and applied AI.",
  },
];

// ── Experience ────────────────────────────────────────────────
export const experience = [
  {
    role: "Founder",
    company: "TheAlphaOnes",
    period: "2022 – Present",
    description:
      "Building developer tools, AI systems, and experimental products aimed at shaping the lifestyle of the future. Focused on rapid MVP development, AI-first architecture, and building systems that push technology forward.",
    tags: [
      "Developer Tools",
      "AI Systems",
      "Product Development",
      "API Architecture",
      "Rapid MVPs",
    ],
  },
  {
    role: "Founder",
    company: "Fold.tao",
    period: "2025 – Present",
    description:
      "Building a private mobile space to capture and preserve memories through photos, videos, audio, and text — organized into a personal timeline.",
    tags: [
      "Mobile Development",
      "React Native",
      "Privacy-focused",
      "Personal Archiving",
      "Media Management",
    ],
  },
  {
    role: "Manager",
    company: "CoffeeCodes",
    period: "5/2025 – 8/2025",
    description:
      "Led backend development and system architecture while managing a small development team. Focused on building scalable APIs and improving engineering workflows.",
    tags: [
      "Backend Development",
      "Team Leadership",
      "System Architecture",
      "API Development",
    ],
  },
  {
    role: "Leader",
    company: "TheAlphaOnes Community",
    period: "2020 – 2024",
    description:
      "Started and grew an open Discord community for developers interested in building in public, collaborating on projects, and exploring new technologies together.",
    tags: [
      "Developer Community",
      "Building in Public",
      "Collaboration",
      "Knowledge Sharing",
    ],
  },
];

// ── Work / Projects ───────────────────────────────────────────
export const projects = [
  {
    title: "COOK CLI",
    description:
      "A powerful CLI tool for modern developers that combines template management, command automation, and development utilities into one workflow.",
    tags: ["Python", "CLI", "Developer Tools", "Template Management", "Nuxt"],
    link: "https://github.com/TheAlphaOnes/cook-cli",
    imageKey: "cook",
  },
  {
    title: "Fold",
    description:
      "A private mobile space to capture and preserve memories through photos, videos, audio, and text — organized into a personal timeline.",
    tags: [
      "React Native",
      "Expo",
      "TypeScript",
      "Hono",
      "Drizzle ORM",
      "Neon Postgres",
      "AWS S3",
    ],
    link: "https://fold.taohq.org",
    imageKey: "fold",
  },
  {
    title: "Openlist",
    description:
      "Waitlist infrastructure for product teams. Launch a premium waitlist with referrals, analytics, and developer-friendly APIs.",
    tags: ["Nuxt", "Postgres", "Better-Auth", "API-First", "Referral Engine"],
    link: "https://openlist.in",
    imageKey: "openlist",
  },
  {
    title: "Browser Agent",
    description:
      "Autonomous browser agent that plans a full action chain upfront and executes in bulk — only replanning on failure or dynamic boundaries. Built on Playwright with a two-pass LLM planner, capped memory, and smart URL shortcuts for token-efficient web automation.",
    tags: ["Playwright", "LLM", "OpenRouter", "Chain-Mode", "Browser-Automation"],
    link: "https://github.com/NormVg/agent-browser",
    imageKey: "agentbrowser",
  },
  {
    title: "OpenDocs",
    description:
      "A minimalist desktop PDF reader with built-in AI chat that enables context-aware conversations with documents.",
    tags: ["Electron", "Vue 3", "TypeScript", "Gemini AI", "PDF.js"],
    link: "https://github.com/NormVg/opendocs",
    imageKey: "opendocs",
  },
  {
    title: "Kraken Editor",
    description: "A code editor with a new flavor — built from scratch to bypass standard constraints.",
    tags: ["Electron", "Vue", "Node.js"],
    link: "https://github.com/NormVg/kraken",
    imageKey: "kraken",

  },
  {
    title: "Cassette",
    description: "A retro-styled audio player interface and music experience.",
    tags: ["Vue", "Web Audio API", "Frontend"],
    link: "https://github.com/NormVg/cassette",
    imageKey: "cassette",
  }
];

// ── Writing / Blog ────────────────────────────────────────────
export const blogPosts = [
  {
    title: "Kraken: A Code Editor with a New Flavor",
    desc: "Exploring the philosophy and design patterns behind the Kraken code editor.",
    tag: "Engineering",
    date: "2024",
    link: "https://thenormvg.substack.com/p/kraken-a-code-editor-with-a-new-flavor",
  },
];

export const blogViewAllLink =
  "https://thenormvg.substack.com/?r=2r6jxt&utm_campaign=pub-share-checklist";

// ── Freelance / Available For ─────────────────────────────────
export const freelanceOfferings = [
  {
    title: "Freelance",
    description:
      "Full-stack web applications, SaaS platforms, dashboards, and landing pages.",
    color: "rgba(180, 220, 255, 0.7)",
  },
  {
    title: "Collaboration",
    description:
      "Open to co-founding opportunities, open-source projects, and product partnerships.",
    color: "rgba(200, 180, 255, 0.7)",
  },
  {
    title: "Consulting",
    description:
      "Technical advisory, architecture reviews, and engineering guidance.",
    color: "rgba(180, 255, 210, 0.7)",
  },
];

export const freelanceCTA = {
  text: "Open to building interesting things with great people.",
  buttonLabel: "Get in touch",
  buttonHref: "#contact",
};

// ── Spotify ───────────────────────────────────────────────────
export const spotify = {
  embedUrl:
    "https://open.spotify.com/embed/track/1hlgWN4erCHPTVV7qhY6we?utm_source=generator",
};

// ── Timeline / Journey ────────────────────────────────────────
export const journey = [
  { id: 1, date: "29•10•2005", description: "Born with a creative bug." },
  { id: 2, date: "xx•xx•2020", description: "Discovered my love for code." },
  { id: 3, date: "20•12•2021", description: "Switched careers to computer science." },
  { id: 4, date: "31•1•2022", description: "Formed TheAlphaOnes." },
  { id: 5, date: "9•10•2022", description: "First 10 members joined the team." },
  { id: 6, date: "26•5•2023", description: "Gained clarity on how to grow and learn." },
  { id: 7, date: "21•7•2023", description: "Discord community started growing." },
  { id: 8, date: "28•10•2023", description: "Twitter grew to 1.5k+ followers." },
  { id: 9, date: "22•12•2023", description: "Taught my first class." },
  { id: 10, date: "1•1•2024", description: "Switched fully to Linux." },
  { id: 11, date: "3•4•2024", description: "Won my second hackathon." },
  { id: 12, date: "3•7•2024", description: "Started my YouTube channel." },
  { id: 13, date: "19•8•2024", description: "Got nicknamed BATMAN." },
  { id: 14, date: "8•12•2024", description: "Judged the Cornucodia Hackathon." },
  { id: 15, date: "20•4•2025", description: "Kraken editor went viral." },
  { id: 16, date: "5•5•2025", description: "Joined CoffeeCodes as Manager and Backend Developer." },
  { id: 17, date: "16•8•2025", description: "Started college." },
  { id: 18, date: "15•12•2025", description: "Founded Fold.tao." },
  { id: 19, date: "19•01•2026", description: "Started Studio.tao." },
  { id: 20, date: "15•02•2026", description: "Did first investor pitch for Fold." },
];

// ── Contact ───────────────────────────────────────────────────
export const contact = {
  heading: "Let's build something.",
  subtext: "Have an idea or just want to say hello? Feel free to reach out.",
};
