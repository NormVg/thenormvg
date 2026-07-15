<template>
  <div class="dedicated-page">
    <div class="page-header">
      <RouterLink to="/" class="back-btn">← Back to Home</RouterLink>
    </div>

    <div class="contact-content">
      <h1 class="page-title">{{ contact.heading }}</h1>
      <p class="page-subtitle">{{ contact.subtext }}</p>

      <a :href="identity.email" class="email-link">
        {{ identity.email.replace('mailto:', '') }}
      </a>

      <div class="social-links">
        <a :href="identity.twitter" target="_blank" class="social-link">Twitter ↗</a>
        <a :href="identity.github" target="_blank" class="social-link">GitHub ↗</a>
        <a :href="identity.linkedin" target="_blank" class="social-link">LinkedIn ↗</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { contact, identity } from "../../portfolio.config.js";
</script>

<style scoped>
.dedicated-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 24px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.page-header {
  margin-bottom: auto;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--color-text-muted);
  text-decoration: none;
  transition: all var(--transition-base);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.back-btn:hover {
  color: var(--color-text);
  transform: translateX(-4px);
}

.contact-content {
  margin: auto 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
}

.page-title {
  font-family: var(--font-heading);
  font-size: 4rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: var(--color-text);
  margin: 0 0 16px 0;
  text-transform: uppercase;
}

.page-subtitle {
  font-size: 18px;
  color: var(--color-text-dim);
  max-width: 600px;
  line-height: 1.6;
  margin: 0 0 48px 0;
}

.email-link {
  font-family: var(--font-mono);
  font-size: 24px;
  color: var(--color-text);
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 8px;
  margin-bottom: 48px;
  transition: all 0.3s;
}

.email-link:hover {
  border-color: var(--color-text);
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
}

.social-links {
  display: flex;
  gap: 32px;
}

.social-link {
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--color-text-muted);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s;
}

.social-link:hover {
  color: var(--color-text);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .email-link {
    font-size: 18px;
  }
  
  .social-links {
    flex-direction: column;
    gap: 24px;
  }
}
</style>
