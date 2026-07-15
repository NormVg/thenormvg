<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";

import { Analytics } from "@vercel/analytics/vue";
</script>

<template>
  <Header />

  <RouterView />
  
  <nav class="seo-footer">
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/work">Work</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
  </nav>

  <Analytics />
</template>

<style scoped>
.seo-footer {
  display: flex;
  justify-content: center;
  gap: 24px;
  padding: 40px 0 60px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  width: 100%;
}

.seo-footer a {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-text-muted);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: color var(--transition-base);
}

.seo-footer a:hover {
  color: var(--color-text);
}
</style>
