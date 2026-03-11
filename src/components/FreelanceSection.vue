<template>
  <section id="freelance" data-animate :class="{ visible: isVisible['freelance'] }">
    <div class="section-inner">
      <h2 class="section-heading">AVAILABLE FOR</h2>
      <div class="freelance-wrapper">
        <div class="offerings-row">
          <div v-for="(item, i) in offerings" :key="item.title" class="offering-item"
            :style="{ '--accent': item.color, animationDelay: `${i * 100}ms` }">
            <div class="offering-dot"></div>
            <h3 class="offering-title">{{ item.title }}</h3>
            <p class="offering-desc">{{ item.description }}</p>
          </div>
        </div>
        <div class="cta-strip">
          <div class="cta-blink"></div>
          <p class="cta-text">{{ freelanceCTA.text }}</p>
          <a :href="freelanceCTA.buttonHref" class="cta-btn">
            <span>{{ freelanceCTA.buttonLabel }}</span>
            <ArrowUpRight :size="14" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowUpRight } from "lucide-vue-next";
import { freelanceOfferings as offerings, freelanceCTA } from "../../portfolio.config.js";
defineProps({ isVisible: Object });
</script>

<style scoped>
.freelance-wrapper {
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  overflow: hidden;
}

.offerings-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.offering-item {
  padding: 28px 26px;
  position: relative;
  transition: background 0.3s ease;
}

/* Vertical dividers between items */
.offering-item+.offering-item {
  border-left: 1px solid rgba(255, 255, 255, 0.06);
}

.offering-item:hover {
  background: rgba(255, 255, 255, 0.025);
}

.offering-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
  margin-bottom: 14px;
  box-shadow: 0 0 12px var(--accent);
}

.offering-title {
  font-family: var(--font-heading);
  font-size: 13px;
  letter-spacing: 3px;
  color: var(--color-text);
  font-weight: 400;
  margin-bottom: 10px;
}

.offering-desc {
  font-size: 13px;
  color: var(--color-text-dim);
  line-height: 1.65;
}

/* Bottom strip CTA */
.cta-strip {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 26px;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.04);
  flex-wrap: wrap;
}

.cta-blink {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(180, 255, 180, 0.8);
  box-shadow: 0 0 8px rgba(180, 255, 180, 0.6);
  animation: blink 2s ease-in-out infinite;
  flex-shrink: 0;
}

@keyframes blink {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.25;
  }
}

.cta-text {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-text-muted);
  flex: 1;
  letter-spacing: 0.5px;
}

.cta-btn {
  font-family: var(--font-heading);
  font-size: 11px;
  letter-spacing: 2.5px;
  color: var(--color-text);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 8px 18px;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.cta-btn:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.4);
}

@media only screen and (max-width: 600px) {
  .offerings-row {
    grid-template-columns: 1fr;
  }

  .offering-item+.offering-item {
    border-left: none;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
  }

  .cta-strip {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding: 24px;
  }

  .cta-text {
    line-height: 1.5;
    flex: none;
    width: 100%;
  }

  .cta-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
