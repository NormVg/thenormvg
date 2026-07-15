<template>
  <div class="dedicated-page">
    <div class="page-header">
      <RouterLink to="/" class="back-btn">← Back to Home</RouterLink>
      <h1 class="page-title">ABOUT ME</h1>
    </div>

    <div class="about-grid">
      <div class="about-left">
        <section class="about-text">
          <p v-for="(para, i) in about.paragraphs" :key="i" v-html="para"></p>
        </section>

        <section class="timeline-section">
          <h2 class="section-title">JOURNEY</h2>
          <div class="timeline">
            <div v-for="item in journey" :key="item.id" class="timeline-item">
              <span class="timeline-date">{{ item.date }}</span>
              <span class="timeline-desc">{{ item.description }}</span>
            </div>
          </div>
        </section>
      </div>

      <div class="about-right">
        <section class="glass-card tech-card">
          <h2 class="section-title">TECH STACK</h2>
          <div class="tech-grid">
            <div v-for="category in techStack" :key="category.name" class="tech-category">
              <h3>{{ category.name }}</h3>
              <div class="tech-tags">
                <span v-for="tech in category.items" :key="tech" class="tech-tag">{{ tech }}</span>
              </div>
            </div>
          </div>
        </section>

        <section class="glass-card exp-card">
          <h2 class="section-title">EXPERIENCE</h2>
          <div class="exp-list">
            <div v-for="exp in experience" :key="exp.role" class="exp-item">
              <div class="exp-header">
                <h4>{{ exp.role }} <span class="company">@ {{ exp.company }}</span></h4>
                <span class="period">{{ exp.period }}</span>
              </div>
              <p>{{ exp.description }}</p>
            </div>
          </div>
        </section>
        
        <section class="glass-card edu-card">
          <h2 class="section-title">EDUCATION</h2>
          <div class="edu-list">
            <div v-for="edu in education" :key="edu.degree" class="edu-item">
              <h4>{{ edu.degree }}</h4>
              <p class="institution">{{ edu.institution }} | {{ edu.period }}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { about, techStack, experience, education, journey } from "../../portfolio.config.js";
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
  margin: 0;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
}

.section-title {
  font-family: var(--font-heading);
  font-size: 14px;
  letter-spacing: 3px;
  color: var(--color-text);
  font-weight: 400;
  text-transform: uppercase;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  padding-bottom: 8px;
  margin-bottom: 24px;
  display: inline-block;
}

.about-text {
  margin-bottom: 60px;
}

.about-text p {
  font-size: 17px;
  line-height: 1.8;
  color: var(--color-text-dim);
  margin-bottom: 20px;
}

:deep(.about-text a) {
  color: var(--color-text-muted);
  border-bottom: 1px solid rgba(145, 145, 145, 0.3);
  text-decoration: none;
  transition: all 0.3s;
}

:deep(.about-text a:hover) {
  color: var(--color-text);
  border-color: var(--color-text);
}

/* Timeline */
.timeline {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.timeline-item {
  display: flex;
  gap: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.timeline-date {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-text-muted);
  min-width: 80px;
}

.timeline-desc {
  font-size: 14px;
  color: var(--color-text-dim);
}

/* Glass Cards */
.glass-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 32px;
  margin-bottom: 32px;
  backdrop-filter: blur(10px);
}

/* Tech Stack */
.tech-grid {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.tech-category h3 {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-text-muted);
  margin-bottom: 12px;
  text-transform: uppercase;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-tag {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-text-dim);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 4px 10px;
  border-radius: 20px;
}

/* Experience */
.exp-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.exp-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
}

.exp-header h4 {
  font-size: 16px;
  color: var(--color-text);
  margin: 0;
}

.company {
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: 12px;
  margin-left: 8px;
}

.period {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-text-muted);
}

.exp-item p {
  font-size: 14px;
  color: var(--color-text-dim);
  line-height: 1.6;
  margin: 0;
}

/* Education */
.edu-item h4 {
  font-size: 16px;
  color: var(--color-text);
  margin: 0 0 8px 0;
}

.institution {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-text-muted);
  margin: 0;
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .page-title {
    font-size: 2.5rem;
  }
}
</style>
