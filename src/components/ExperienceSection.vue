<template>
  <section id="experience" data-animate :class="{ visible: isVisible['experience'] }">
    <div class="section-inner">
      <h2 class="section-heading">EXPERIENCE</h2>
      <div class="experience-list">
        <div v-for="(exp, i) in experiences" :key="exp.role" class="exp-card"
          :style="{ animationDelay: `${i * 120}ms` }">
          <div class="exp-index">{{ String(i + 1).padStart(2, '0') }}</div>
          <div class="exp-body">
            <div class="exp-header">
              <div>
                <p class="exp-title">{{ exp.role }}</p>
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
import { experience as experiences } from "../../portfolio.config.js";
defineProps({ isVisible: Object });
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

@media only screen and (max-width: 600px) {
  .exp-card {
    gap: 16px;
    padding: 24px 0;
  }

  .exp-header {
    flex-direction: column;
    gap: 4px;
    margin-bottom: 12px;
  }

  .exp-tags {
    gap: 6px;
  }
}
</style>
