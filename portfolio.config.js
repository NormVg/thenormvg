/**
 * portfolio.config.js
 * ─────────────────────────────────────────────────────────────
 * Single source of truth for all portfolio content.
 * Edit this file to update your portfolio — no component editing required.
 * ─────────────────────────────────────────────────────────────
 */

// ── Identity ──────────────────────────────────────────────────
export const identity = {
  name: "Vishnu Gupta",
  subtitle: "FULL-STACK DEVELOPER, UI DESIGNER & AI ENTHUSIAST",
  description:
    "Crafting digital experiences that merge clean aesthetics with robust engineering. Building tools for the future at",
  descriptionLinkText: "TheAlphaOnes",
  descriptionLinkHref: "https://thealphaones.com",
  github: "https://github.com/NormVg",
  githubHandle: "@NormVg",
  twitter: "https://twitter.com/TheNormVg",
  linkedin: "https://www.linkedin.com/in/vishnu-v-gupta/",
  youtube: "#",
  email: "mailto:hello@thealphaones.com",
};

// ── About ─────────────────────────────────────────────────────
export const about = {
  paragraphs: [
    "I'm a 20-year-old developer and designer who switched careers to CS in 2021 and never looked back. I build products, lead communities, and constantly explore the intersection of design and technology.",
    `Currently focused on building <a href="https://thealphaones.com" target="_blank">TheAlphaOnes</a> — a developer community and SaaS platform. Previously won hackathons, judged them, taught classes, and got nicknamed Batman along the way.`,
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
    items: ["Vue.js", "Nuxt", "React", "React Native", "Tailwind CSS", "Three.js", "Figma"],
  },
  {
    name: "Backend & Auth",
    items: ["Node.js", "Hono", "Express", "Go", "Postgres", "Redis", "Drizzle ORM", "Supabase", "Better Auth"],
  },
  {
    name: "AI & Tools",
    items: ["Ollama", "AI SDK", "Langchain", "OpenAI", "Git", "Docker", "Vercel", "Cloudflare", "Electron", "OpenRouter"],
  },
  {
    name: "Hardware & IoT",
    items: ["IoT", "Arduino", "ESP32", "Raspberry Pi", "OLED Screens", "Servos", "Sensors"],
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
    role: "Founder & Full-Stack Developer",
    company: "TheAlphaOnes",
    period: "2024 – Present",
    description:
      "Built and launched a build-in-public developer community & SaaS platform from scratch. Designed the system architecture, shipping product features solo.",
    tags: ["Nuxt", "Hono", "Postgres", "AI", "Drizzle ORM"],
  },
  {
    role: "Solo Developer",
    company: "Kraken Editor",
    period: "2023 – 2024",
    description:
      "Designed and built a fully custom code editor as a desktop app from the ground up — covering syntax highlighting, theming, and custom UI components.",
    tags: ["Electron", "Vue", "Node.js"],
  },
];

// ── Work / Projects ───────────────────────────────────────────
// Images are imported in WorkSection.vue and passed via config keys.
// Add a matching `imageKey` string that maps to an import in WorkSection.
export const projects = [
  {
    title: "TheAlphaOnes",
    description: "A build-in-public developer community & SaaS platform.",
    tags: ["Nuxt", "Hono", "Postgres", "AI"],
    link: "https://thealphaones.com",
    imageKey: "alpha",
  },
  {
    title: "Kraken Editor",
    description: "A code editor with a new flavor — built from scratch.",
    tags: ["Electron", "Vue", "Node.js"],
    link: "#",
    imageKey: "kraken",
  },
  {
    title: "Fold Admin",
    description: "Dashboard for managing waitlists, analytics, and integrations.",
    tags: ["Nuxt", "PWA", "Drizzle ORM"],
    link: "#",
    imageKey: "fold",
  },
];

// ── Writing / Blog ────────────────────────────────────────────
export const blogPosts = [
  {
    title: "Building a SaaS from Scratch — What I Learned",
    desc: "Reflections on shipping TheAlphaOnes solo, from idea to paying users.",
    tag: "Engineering",
    date: "2025",
    link: "https://taohq.org/blog",
  },
  {
    title: "Why I Ditched VS Code and Built My Own Editor",
    desc: "The story behind Kraken Editor — and why building your tools changes how you think.",
    tag: "Dev",
    date: "2024",
    link: "https://taohq.org/blog",
  },
  {
    title: "IoT at Home — Automating My Room with ESP32",
    desc: "How I wired up sensors, OLED displays, and servos to build a smart room setup.",
    tag: "IoT",
    date: "2024",
    link: "https://taohq.org/blog",
  },
];

export const blogViewAllLink = "https://taohq.org/blog";

// ── Freelance / Available For ─────────────────────────────────
export const freelanceOfferings = [
  {
    title: "Freelance",
    description: "Full-stack web apps, SaaS platforms, dashboards, and landing pages.",
    color: "rgba(180, 220, 255, 0.7)",
  },
  {
    title: "Collaboration",
    description: "Open to co-founding, open-source projects, and product partnerships.",
    color: "rgba(200, 180, 255, 0.7)",
  },
  {
    title: "Consulting",
    description: "Technical advisory, architecture reviews, and code audits.",
    color: "rgba(180, 255, 210, 0.7)",
  },
];

export const freelanceCTA = {
  text: "Open to work — let's build something great together.",
  buttonLabel: "Get in touch",
  buttonHref: "#contact",
};

// ── Spotify ───────────────────────────────────────────────────
export const spotify = {
  // Spotify embed URL for the track. Replace the track ID to update.
  embedUrl: "https://open.spotify.com/embed/track/1hlgWN4erCHPTVV7qhY6we?utm_source=generator",
};

// ── Timeline / Journey ────────────────────────────────────────
// Timeline data lives in src/assets/data/Timeline.json — edit that file to add/remove milestones.
// If you prefer to move it here, replace the import in TimelineSection.vue with this array.
export const journey = [
  { id: 1, date: "29•10•2005", description: "Born with a creative bug in me." },
  { id: 2, date: "xx•xx•2020", description: "Discovered my love for code" },
  { id: 3, date: "20•12•2021", description: "Switched careers to CS" },
  { id: 4, date: "31•1•2022", description: "Formed TheAlphaOnes" },
  { id: 5, date: "9•10•2022", description: "First 10 members joined the team" },
  { id: 6, date: "26•5•2023", description: "Got clarity on how to grow and learn" },
  { id: 7, date: "19•6•2023", description: "Met a crazy, inspiring person" },
  { id: 8, date: "21•7•2023", description: "Discord community took off" },
  { id: 9, date: "7•10•2023", description: "Had my first interview" },
  { id: 10, date: "28•10•2023", description: "Twitter blew up—1.5k+ followers!" },
  { id: 11, date: "2•11•2023", description: "First business meeting (flopped)" },
  { id: 12, date: "22•12•2023", description: "Taught my first class" },
  { id: 13, date: "1•1•2024", description: "Switched fully to Linux" },
  { id: 14, date: "15•3•2024", description: "First hackathon (failed)" },
  { id: 15, date: "3•4•2024", description: "Won my second hackathon!" },
  { id: 16, date: "3•7•2024", description: "Started my YouTube channel" },
  { id: 17, date: "19•8•2024", description: "Got nicknamed BATMAN" },
  { id: 18, date: "8•12•2024", description: "Judged the Cornucodia Hackathon" },
];

// ── Contact ───────────────────────────────────────────────────
export const contact = {
  heading: "Let's build something.",
  subtext: "Got an idea or just want to say hey? Reach out.",
};
