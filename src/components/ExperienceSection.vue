<template>
  <section id="experience" data-animate :class="{ visible: isVisible['experience'] }">
    <div class="section-inner">
      <h2 class="section-heading">EXPERIENCE</h2>
      <div class="experience-list">
        <div v-for="(exp, i) in experiences" :key="exp.title" class="exp-card"
          :style="{ animationDelay: `${i * 120}ms` }">
          <div class="exp-index">{{ String(i + 1).padStart(2, '0') }}</div>
          <div class="exp-body">
            <div class="exp-header">
              <div>
                <p class="exp-title">{{ exp.title }}</p>
                <p class="exp-company">@ {{ exp.company }}</p>
              </div>
              <span class="exp-period">{{ exp.period }}</span>
            </div>
            <p class="exp-desc">{{ exp.description }}</p>
            <div v-if="exp.tags?.length" class="exp-tags">
              <span v-for="tag in exp.tags" :key="tag" class="exp-tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({ isVisible: Object });

const experiences = [
  {
    title: "Founder & Full-Stack Developer",
    company: "TheAlphaOnes",
    period: "2024 – Present",
    description:
      "Built and launched a build-in-public developer community & SaaS platform from scratch. Designed the system architecture, shipping product features solo.",
    tags: ["Nuxt", "Hono", "Postgres", "AI", "Drizzle ORM"],
  },
  {
    title: "Solo Developer",
    company: "Kraken Editor",
    period: "2023 – 2024",
    description:
      "Designed and built a fully custom code editor as a desktop app from the ground up — covering syntax highlighting, theming, and custom UI components.",
    tags: ["Electron", "Vue", "Node.js"],
  },
];
</script>

<style scoped>
.experience-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

/* Numbered row style — timeline feel without the overhead */
.exp-card {
  display: flex;
  gap: 24px;
  padding: 28px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  transition: all 0.3s ease;
  position: relative;
}

.exp-card:first-child {
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.exp-card:hover {
  padding-left: 8px;
}

.exp-index {
  font-family: var(--font-mono);
  font-size: 11px;
  color: rgba(255, 255, 255, 0.12);
  letter-spacing: 2px;
  padding-top: 4px;
  flex-shrink: 0;
  width: 28px;
}

.exp-body {
  flex: 1;
  min-width: 0;
}

.exp-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 10px;
}

.exp-title {
  font-family: var(--font-heading);
  font-size: 15px;
  letter-spacing: 2px;
  color: var(--color-text);
  font-weight: 400;
  margin-bottom: 4px;
}

.exp-company {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-text-muted);
  letter-spacing: 1px;
}

.exp-period {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-text-muted);
  letter-spacing: 1px;
  white-space: nowrap;
  flex-shrink: 0;
}

.exp-desc {
  font-size: 14px;
  color: var(--color-text-dim);
  line-height: 1.7;
  margin-bottom: 14px;
}

.exp-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.exp-tag {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-text-muted);
  background: transparent;
  padding: 2px 8px;
  border-radius: 2px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  letter-spacing: 0.5px;
}
</style>
