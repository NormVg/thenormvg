<template>
  <section id="github" data-animate :class="{ visible: isVisible['github'] }">
    <div class="section-inner">
      <h2 class="section-heading">GITHUB</h2>
      <div class="github-grid-wrap">
        <img src="https://ghchart.rshah.org/2E3031/NormVg" alt="NormVg GitHub contribution chart" class="github-grid" />
        <a href="https://github.com/NormVg" target="_blank" class="github-link">
          <Github :size="13" />
          @NormVg
          <ArrowUpRight :size="13" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Github, ArrowUpRight } from "lucide-vue-next";

defineProps({ isVisible: Object });
</script>

<style scoped>
.github-grid-wrap {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.github-grid {
  width: 100%;
  min-width: 600px;
  opacity: 0.6;
  filter: invert(1) hue-rotate(180deg) contrast(.9);
  border-radius: 6px;
  transition: opacity 500ms var(--ease-out-expo);
}

.github-grid:hover {
  opacity: 0.9;
}

.github-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-heading);
  font-size: 11px;
  letter-spacing: 3px;
  color: var(--color-text-muted);
  text-decoration: none;
  transition: color var(--transition-base);
}

.github-link:hover {
  color: var(--color-text);
}

@media only screen and (max-width: 768px) {
  .github-grid-wrap {
    overflow-x: auto;
    padding-bottom: 8px;
    /* For scrollbar space */
  }

  /* Custom scrollbar for github area on mobile */
  .github-grid-wrap::-webkit-scrollbar {
    height: 4px;
  }

  .github-grid-wrap::-webkit-scrollbar-track {
    background: transparent;
  }

  .github-grid-wrap::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 4px;
  }
}
</style>
