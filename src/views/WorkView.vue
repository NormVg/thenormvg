<template>
  <div class="dedicated-page">
    <div class="page-header">
      <RouterLink to="/" class="back-btn">← Back to Home</RouterLink>
      <h1 class="page-title">SELECTED WORKS</h1>
      <p class="page-subtitle">A collection of things I've built, experimented with, and launched.</p>
    </div>

    <div class="projects-grid">
      <a v-for="project in projects" :key="project.title" :href="project.link" target="_blank" class="project-card glass-card">
        <div class="project-content">
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-desc">{{ project.description }}</p>
          <div class="project-tags">
            <span v-for="tag in project.tags" :key="tag" class="tech-tag">{{ tag }}</span>
          </div>
        </div>
        <div class="project-arrow">↗</div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { projects } from "../../portfolio.config.js";
</script>

<style scoped>
.dedicated-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 24px 80px;
  min-height: 100vh;
}

.page-header {
  margin-bottom: 60px;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--color-text-muted);
  text-decoration: none;
  margin-bottom: 24px;
  transition: all var(--transition-base);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.back-btn:hover {
  color: var(--color-text);
  transform: translateX(-4px);
}

.page-title {
  font-family: var(--font-heading);
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: var(--color-text);
  margin: 0 0 16px 0;
}

.page-subtitle {
  font-size: 18px;
  color: var(--color-text-dim);
  max-width: 600px;
  line-height: 1.6;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 24px;
}

.project-card {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.project-card:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.15);
}

.glass-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  padding: 32px;
  backdrop-filter: blur(10px);
}

.project-content {
  flex: 1;
}

.project-title {
  font-family: var(--font-heading);
  font-size: 22px;
  color: var(--color-text);
  margin: 0 0 12px 0;
  font-weight: 500;
}

.project-desc {
  font-size: 15px;
  color: var(--color-text-dim);
  line-height: 1.6;
  margin: 0 0 24px 0;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-tag {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-text-muted);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 4px 10px;
  border-radius: 20px;
}

.project-arrow {
  font-size: 20px;
  color: var(--color-text-muted);
  transition: all 0.3s ease;
  margin-left: 16px;
}

.project-card:hover .project-arrow {
  color: var(--color-text);
  transform: translate(4px, -4px);
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
