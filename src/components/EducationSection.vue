<template>
  <section id="education" data-animate :class="{ visible: isVisible['education'] }">
    <div class="section-inner">
      <h2 class="section-heading">EDUCATION</h2>
      <div class="education-list">
        <div v-for="(entry, i) in education" :key="entry.degree" class="edu-card"
          :style="{ animationDelay: `${i * 120}ms` }">
          <div class="edu-accent-bar"></div>
          <div class="edu-body">
            <div class="edu-header">
              <div>
                <p class="edu-degree">{{ entry.degree }}</p>
                <p class="edu-institution">{{ entry.institution }}</p>
              </div>
              <span class="edu-period">{{ entry.period }}</span>
            </div>
            <p v-if="entry.note" class="edu-note">{{ entry.note }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { education } from "../../portfolio.config.js";
defineProps({ isVisible: Object });
</script>

<style scoped>
.education-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Left-accent bar style — feels academic/structured */
.edu-card {
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition: all 0.3s ease;
}

.edu-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
}

.edu-accent-bar {
  width: 3px;
  flex-shrink: 0;
  background: linear-gradient(to bottom, rgba(180, 220, 255, 0.6), rgba(80, 120, 200, 0.2));
}

.edu-body {
  padding: 24px 28px;
  flex: 1;
}

.edu-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 10px;
}

.edu-degree {
  font-family: var(--font-heading);
  font-size: 15px;
  letter-spacing: 2px;
  color: var(--color-text);
  font-weight: 400;
  margin-bottom: 5px;
}

.edu-institution {
  font-family: var(--font-mono);
  font-size: 12px;
  color: rgba(180, 220, 255, 0.6);
  letter-spacing: 1px;
}

.edu-period {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-text-muted);
  letter-spacing: 1px;
  white-space: nowrap;
  flex-shrink: 0;
}

.edu-note {
  font-size: 13px;
  color: var(--color-text-dim);
  line-height: 1.7;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding-top: 12px;
  margin-top: 4px;
}

@media only screen and (max-width: 600px) {
  .edu-header {
    flex-direction: column;
    gap: 6px;
  }

  .edu-body {
    padding: 20px 22px;
  }
}
</style>
