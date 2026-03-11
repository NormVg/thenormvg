<template>
  <section id="about" data-animate :class="{ visible: isVisible['about'] }">
    <div class="section-inner">
      <h2 class="section-heading">ABOUT</h2>
      <div class="about-content">
        <p v-for="(para, i) in about.paragraphs" :key="i" v-html="para"></p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { about } from "../../portfolio.config.js";
defineProps({ isVisible: Object });
</script>

<style scoped>
.about-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.about-content p {
  font-size: 17px;
  line-height: 1.8;
  color: var(--color-text-dim);
  max-width: 600px;
}

.about-content a {
  color: var(--color-text-muted);
  border-bottom: 1px solid rgba(145, 145, 145, 0.3);
  text-decoration: none;
  transition: color var(--transition-base), border-color var(--transition-base);
}

.about-content a:hover {
  color: var(--color-text);
  border-color: var(--color-text);
}
</style>
