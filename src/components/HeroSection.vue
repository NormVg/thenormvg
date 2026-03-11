<template>
  <section id="hero">
    <div class="hero-content">
      <h1 class="hero-name" :class="{ 'animate-in': ready }">
        Vishnu Gupta
      </h1>

      <p class="hero-subtitle" :class="{ 'animate-in': ready }" style="animation-delay: 200ms">
        FULL-STACK DEVELOPER, UI DESIGNER & AI ENTHUSIAST
      </p>

      <p class="hero-desc" :class="{ 'animate-in': ready }" style="animation-delay: 450ms">
        Crafting digital experiences that merge clean aesthetics with robust
        engineering. Building tools for the future at
        <a href="https://thealphaones.com" target="_blank">TheAlphaOnes</a>.
      </p>
    </div>

    <div class="scroll-indicator" :class="{ 'animate-in': ready }" style="animation-delay: 900ms">
      <span class="scroll-text">SCROLL</span>
      <span class="scroll-line"></span>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const ready = ref(false);
onMounted(() => {
  ready.value = true;
});
</script>

<style scoped>
#hero {
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding-top: 80px;
}

.hero-name {
  font-family: var(--font-display);
  font-size: clamp(60px, 10vw, 110px);
  font-weight: 100;
  color: var(--color-text);
  line-height: 1;
  margin-bottom: 16px;
  opacity: 0;
}

.hero-subtitle {
  font-family: var(--font-heading);
  font-size: clamp(12px, 1.5vw, 16px);
  letter-spacing: 5px;
  color: var(--color-text-muted);
  margin-bottom: 28px;
  opacity: 0;
}

.hero-desc {
  font-size: 17px;
  line-height: 1.7;
  color: var(--color-text-dim);
  max-width: 480px;
  opacity: 0;
}

.hero-desc a {
  color: var(--color-text-muted);
  border-bottom: 1px solid rgba(145, 145, 145, 0.3);
  text-decoration: none;
  transition: color var(--transition-base), border-color var(--transition-base);
}

.hero-desc a:hover {
  color: var(--color-text);
  border-color: var(--color-text);
}

.animate-in.hero-name {
  animation: fadeUp 900ms var(--ease-out-expo) forwards;
}

.animate-in.hero-subtitle {
  animation: fadeUp 800ms var(--ease-out-expo) forwards;
}

.animate-in.hero-desc {
  animation: fadeUp 800ms var(--ease-out-expo) forwards;
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 0;
  display: flex;
  align-items: center;
  gap: 10px;
  opacity: 0;
}

.scroll-indicator.animate-in {
  animation: fadeIn 1000ms var(--ease-out-expo) forwards;
  animation-delay: 900ms;
}

.scroll-text {
  font-family: var(--font-heading);
  font-size: 11px;
  letter-spacing: 4px;
  color: var(--color-text-muted);
  animation: subtlePulse 3s ease-in-out infinite;
}

.scroll-line {
  width: 40px;
  height: 1px;
  background: var(--color-text-muted);
  transform-origin: left;
  animation: lineGrow 2s ease-out forwards;
}

@media only screen and (max-width: 768px) {
  #hero {
    min-height: 80vh;
    padding-top: 20px;
  }

  .hero-desc {
    font-size: 15px;
  }

  .scroll-indicator {
    bottom: 24px;
  }
}
</style>
