<template>
  <section id="work" data-animate :class="{ visible: isVisible['work'] }">
    <div class="section-inner">
      <h2 class="section-heading">WORK</h2>
      <div class="projects-grid">
        <a v-for="(project, i) in projects" :key="project.title" :href="project.link" target="_blank"
          class="project-card glass-card" :style="{ animationDelay: `${i * 120}ms` }">
          <div class="project-content">
            <div class="project-header">
              <h3 class="project-title">{{ project.title }}</h3>
              <ArrowUpRight class="project-arrow" :size="18" />
            </div>
            <p class="project-desc">{{ project.description }}</p>
            <div class="project-tags">
              <span v-for="tag in project.tags" :key="tag" class="project-tag">
                {{ tag }}
              </span>
            </div>
          </div>
          <div class="project-img-wrapper">
            <img :src="project.image" :alt="project.title" class="project-img" />
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowUpRight } from "lucide-vue-next";

import imgAlpha from "@/assets/code_img/def1.gif";
import imgKraken from "@/assets/code_img/kraken.gif";
import imgFold from "@/assets/code_img/def.gif";

defineProps({ isVisible: Object });

const projects = [
  {
    title: "TheAlphaOnes",
    description: "A build-in-public developer community & SaaS platform.",
    tags: ["Nuxt", "Hono", "Postgres", "AI"],
    link: "https://thealphaones.com",
    image: imgAlpha,
  },
  {
    title: "Kraken Editor",
    description: "A code editor with a new flavor — built from scratch.",
    tags: ["Electron", "Vue", "Node.js"],
    link: "#",
    image: imgKraken,
  },
  {
    title: "Fold Admin",
    description:
      "Dashboard for managing waitlists, analytics, and integrations.",
    tags: ["Nuxt", "PWA", "Drizzle ORM"],
    link: "#",
    image: imgFold,
  },
];
</script>

<style scoped>
/* ── Card container ────────────────────────────────────────── */
.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

.project-card {
  text-decoration: none;
  display: flex;
  align-items: stretch;
  cursor: pointer;
  overflow: hidden;
}

/* ── Text side ─────────────────────────────────────────────── */
.project-content {
  flex: 1 1 0%;
  min-width: 0;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.project-title {
  font-family: var(--font-heading);
  font-size: 15px;
  letter-spacing: 2px;
  color: var(--color-text);
  font-weight: 400;
}

.project-arrow {
  color: var(--color-text-muted);
  transition: transform var(--transition-base), color var(--transition-base);
}

.project-card:hover .project-arrow {
  transform: translate(3px, -3px);
  color: var(--color-text);
}

.project-desc {
  font-size: 14px;
  line-height: 1.6;
  color: var(--color-text-dim);
  margin-bottom: 14px;
}

.project-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.project-tag {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--color-text-muted);
  background: rgba(255, 255, 255, 0.08);
  padding: 3px 10px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

/* ── Image side ─────────────────────────────────────────────── */
.project-img-wrapper {
  flex: 0 0 280px;
  /* Fixed width, won't grow or shrink */
  position: relative;
  overflow: hidden;
  border-left: 1px solid rgba(255, 255, 255, 0.15);
}

.project-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.85;
  transition: transform 700ms var(--ease-out-expo), opacity var(--transition-base);
}

.project-card:hover .project-img {
  transform: scale(1.05);
  opacity: 1;
}

/* ── Mobile ─────────────────────────────────────────────────── */
@media only screen and (max-width: 768px) {
  .project-card {
    flex-direction: column-reverse;
  }

  .project-content {
    padding: 22px;
  }

  .project-img-wrapper {
    flex: none;
    width: 100%;
    aspect-ratio: 16 / 9;
    position: relative;
    border-left: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  }
}
</style>
