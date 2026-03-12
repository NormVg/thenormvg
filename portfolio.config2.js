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
  subtitle: "FULL-STACK DEVELOPER, UI DESIGNER & AI BUILDER",
  description:
    "Crafting digital experiences that merge clean aesthetics with robust engineering. Building tools for the future at",
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
    "I'm a 20-year-old developer and designer who switched careers to CS in 2021 and never looked back. I build products, lead communities, and constantly explore the intersection of design and technology.",
    `Currently focused on building <a href="https://taohq.org" target="_blank">TheAlphaOnes</a> - a startup in Making Building Products to better your lifestyle of future. Previously won hackathons, judged them, taught classes, and got nicknamed Batman along the way.`,
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
    role: "Founder",
    company: "TheAlphaOnes",
    period: "2022 – Present",
    description:
      "Building tools, AI systems, and experimental products aimed at shaping the lifestyle of the future. Focused on rapid MVP development, AI-first architecture, and building systems for the future.",
    tags: [
      "Developer Tools",
      "AI Systems",
      "Product Development",
      "API Architecture",
      "Rapid MVPs",
    ],
  },
  {
    role: "Manager",
    company: "CoffeeCodes",
    period: "5/2025 – 8/2025",
    description:
      "Building tools, AI systems, and experimental products aimed at shaping the lifestyle of the future. Focused on rapid MVP development, AI-first architecture, and building systems for the future.",
    tags: [
      "Developer Tools",
      "AI Systems",
      "Product Development",
      "API Architecture",
      "Rapid MVPs",
    ],
  },
  {
    role: "Leader",
    company: "TheAlphaOnes Community",
    period: "2020 – 2024",
    description:
      "Started and grew an open discord community for developers interested in building in public, collaborating on projects, and exploring new technologies together.",
    tags: [
      "Developer Community",
      "Building in Public",
      "Collaboration",
      "Knowledge Sharing",
    ],
  },
];

// ── Work / Projects ───────────────────────────────────────────
// Images are imported in WorkSection.vue and passed via config keys.
// Add a matching `imageKey` string that maps to an import in WorkSection.
export const projects = [
  {
    title: "COOK CLI",
    description: "A powerful CLI tool for modern developers - template management, command automation, and dev utilities unified. Streamline your workflow and standardize projects with one tool.",
    tags: ["Python", "CLI", "Developer Tools", "Template Management", "Nuxt"],
    link: "https://github.com/TheAlphaOnes/cook-cli",
    imageKey: "cook",
  },
  {
    title: "Fold",
    description: "A private mobile space to capture and keep memories - photos, videos, audio, and text in a personal timeline. Only your eyes, only your memories.",
    tags: ["React Native", "Expo", "TypeScript", "Hono", "Drizzle ORM", "Neon Postgres", "AWS S3"],
    link: "https://github.com/NormVg/fold.phone",
    imageKey: "fold",
  },
  {
    title: "Openlist",
    description: "Waitlist infrastructure for product teams. Deploy a premium waitlist in seconds and capture leads with style.",
    tags: ["Nuxt", "Postgres", "Better-Auth", "API-First", "Referral Engine"],
    link: "https://openlist.in",
    imageKey: "openlist",
  },
  {
    title: "OpenDocs",
    description: "A minimalist desktop PDF reader with built-in AI chat. Read, search, and have context-aware conversations with your documents powered by Google Gemini.",
    tags: ["Electron", "Vue 3", "TypeScript", "Gemini AI", "PDF.js"],
    link: "https://github.com/NormVg/opendocs",
    imageKey: "opendocs",
  },
  {
    title: "Kraken Editor",
    description: "A code editor built from scratch with a new design theory - inspired by Hyprland and Neovim. Minimal, keyboard-driven, with an embedded browser and deep AI integration.",
    tags: ["Electron", "Vue", "CodeMirror", "Node.js", "Ollama"],
    link: "https://github.com/NormVg/kraken",
    imageKey: "kraken",
  },
  {
    title: "Cassette",
    description: "A self-proclaimed decentralized music streaming platform. Built for true music lovers - own your collection, stream freely, and embrace decentralization.",
    tags: ["Nuxt 3", "Vue", "TypeScript", "Decentralized"],
    link: "https://github.com/NormVg/cassette",
    imageKey: "cassette",
  },
];

// ── Writing / Blog ────────────────────────────────────────────
export const blogPosts = [
  {
    title: "Kraken: A Code Editor with a New Flavor",
    desc: "Exploring the philosophy and design patterns behind the Kraken code editor.",
    tag: "Engineering",
    date: "2024",
    link: "https://thenormvg.substack.com/p/kraken-a-code-editor-with-a-new-flavor",
  }
];

export const blogViewAllLink = "https://thenormvg.substack.com/?r=2r6jxt&utm_campaign=pub-share-checklist";

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
  text: "Open to work - let's build something great together.",
  buttonLabel: "Get in touch",
  buttonHref: "#contact",
};

// ── Spotify ───────────────────────────────────────────────────
export const spotify = {
  // Spotify embed URL for the track. Replace the track ID to update.
  embedUrl: "https://open.spotify.com/embed/track/1hlgWN4erCHPTVV7qhY6we?utm_source=generator",
};

// ── Timeline / Journey ────────────────────────────────────────
// Timeline data lives in src/assets/data/Timeline.json - edit that file to add/remove milestones.
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
  { id: 10, date: "28•10•2023", description: "Twitter blew up-1.5k+ followers!" },
  { id: 11, date: "2•11•2023", description: "First business meeting (flopped)" },
  { id: 12, date: "22•12•2023", description: "Taught my first class" },
  { id: 13, date: "1•1•2024", description: "Switched fully to Linux" },
  { id: 14, date: "15•3•2024", description: "First hackathon (failed)" },
  { id: 15, date: "3•4•2024", description: "Won my second hackathon!" },
  { id: 16, date: "3•7•2024", description: "Started my YouTube channel" },
  { id: 17, date: "19•8•2024", description: "Got nicknamed BATMAN" },
  { id: 18, date: "8•12•2024", description: "Judged the Cornucodia Hackathon" },
  { id: 19, date: "20•4•2025", description: "Kraken Code editor got viral" },
  { id: 20, date: "5•5•2025", description: "Joinded CoffeeCodes as Manager + Backend dev" },
  { id: 21, date: "16•8•2025", description: "Joined College " },
  { id: 22, date: "xx•10•2025", description: "Lost all my momentum and motivation" },
  { id: 23, date: "xx•10•2025", description: "Founded Orbit.tao, a insider college community for like minded builders. to stay on track." },
  { id: 24, date: "16•11•2025", description: "IIIT Delhi ECE Hacktrohn finallist" },
  { id: 25, date: "15•12•2025", description: "Founded Fold.tao, a privacy focused expressive and memory capturning platform" },
  { id: 26, date: "19•01•2026", description: "Started Studio.tao, a tech creative agency service" },
  { id: 27, date: "15•02•2026", description: "did 1st invester pitch for fold.tao" },



];

// ── Contact ───────────────────────────────────────────────────
export const contact = {
  heading: "Let's build something.",
  subtext: "Got an idea or just want to say hey? Reach out.",
};
