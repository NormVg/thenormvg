<template>
  <section id="timeline" data-animate :class="{ visible: isVisible['timeline'] }">
    <div class="section-inner">
      <h2 class="section-heading">JOURNEY</h2>
      <div class="timeline-track">
        <div class="timeline-line"></div>
        <TransitionGroup name="tl">
          <div v-for="(item, i) in visibleTimeline" :key="item.id" class="timeline-item" :style="{ '--i': i }">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <span class="timeline-date">{{ item.date }}</span>
              <p class="timeline-desc">{{ item.description }}</p>
            </div>
          </div>
        </TransitionGroup>
      </div>

      <button v-if="timeline.length > PREVIEW_COUNT" class="timeline-toggle" @click="expanded = !expanded">
        <span class="toggle-label">
          {{ expanded ? "Show less" : `Show all ${timeline.length} milestones` }}
        </span>
        <ChevronDown class="toggle-icon" :size="14" :class="{ rotated: expanded }" />
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { ChevronDown } from "lucide-vue-next";
import { journey } from "../../portfolio.config.js";

defineProps({ isVisible: Object });

const PREVIEW_COUNT = 5;
const expanded = ref(false);
const timeline = journey;
const visibleTimeline = computed(() =>
  expanded.value ? timeline : timeline.slice(0, PREVIEW_COUNT)
);
</script>

<style scoped>
.timeline-track {
  position: relative;
  padding-left: 30px;
}

.timeline-line {
  position: absolute;
  top: 0;
  left: 6px;
  width: 1px;
  height: 100%;
  background: linear-gradient(to bottom,
      rgba(145, 145, 145, 0.3),
      rgba(145, 145, 145, 0.05));
}

.timeline-item {
  position: relative;
  padding-bottom: 28px;
  display: flex;
  align-items: flex-start;
}

.timeline-dot {
  position: absolute;
  left: -27px;
  top: 6px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-text-muted);
  border: 2px solid var(--color-bg);
  transition: background var(--transition-base), box-shadow var(--transition-base);
}

.timeline-item:hover .timeline-dot {
  background: var(--color-text);
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.15);
}

.timeline-content {
  display: flex;
  align-items: baseline;
  gap: 20px;
}

.timeline-date {
  font-family: var(--font-mono);
  font-size: 16px;
  color: rgba(145, 145, 145, 0.5);
  white-space: nowrap;
  min-width: 110px;
}

.timeline-desc {
  font-size: 15px;
  line-height: 1.6;
  color: var(--color-text-dim);
  transition: color var(--transition-base);
}

.timeline-item:hover .timeline-desc {
  color: var(--color-text-muted);
}

/* Toggle button */
.timeline-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  margin-left: 30px;
  padding: 8px 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: var(--font-heading);
  font-size: 12px;
  letter-spacing: 3px;
  color: var(--color-text-muted);
  transition: color var(--transition-base);
}

.timeline-toggle:hover {
  color: var(--color-text);
}

.toggle-icon {
  transition: transform 350ms var(--ease-out-expo);
}

.toggle-icon.rotated {
  transform: rotate(180deg);
}

/* TransitionGroup */
.tl-move {
  transition: transform 500ms var(--ease-out-expo);
}

.tl-enter-active {
  transition: opacity 450ms var(--ease-out-expo),
    transform 450ms var(--ease-out-expo);
  transition-delay: calc(var(--i, 0) * 60ms);
}

.tl-leave-active {
  transition: opacity 250ms ease, transform 250ms ease;
  transition-delay: calc(var(--i, 0) * 30ms);
}

.tl-enter-from {
  opacity: 0;
  transform: translateY(16px);
}

.tl-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Mobile */
@media only screen and (max-width: 768px) {
  .timeline-content {
    flex-direction: column;
    gap: 2px;
  }

  .timeline-date {
    min-width: unset;
    font-size: 14px;
  }

  .timeline-desc {
    font-size: 14px;
  }
}
</style>
