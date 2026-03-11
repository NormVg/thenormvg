<template>
  <section id="contact" data-animate :class="{ visible: isVisible['contact'] }">
    <div class="section-inner contact-inner">
      <h2 class="contact-heading">Let's build something.</h2>
      <p class="contact-sub">Got an idea or just want to say hey? Reach out.</p>
      <div class="socials">
        <a v-for="social in socials" :key="social.label" :href="social.href" target="_blank" class="social-link">
          <component :is="social.icon" :size="15" />
          <span class="social-label">{{ social.label }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Twitter, Github, Youtube, Mail, Linkedin } from "lucide-vue-next";

defineProps({ isVisible: Object });

const socials = [
  { label: "Twitter", href: "https://twitter.com/TheNormVg", icon: Twitter },
  { label: "GitHub", href: "https://github.com/NormVg", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vishnu-v-gupta/", icon: Linkedin },
  { label: "YouTube", href: "#", icon: Youtube },
  { label: "Email", href: "mailto:hello@thealphaones.com", icon: Mail },
];
</script>

<style scoped>
.contact-inner {
  text-align: left;
  padding-top: 60px;
  padding-bottom: 100px;
}

.contact-heading {
  font-family: var(--font-display);
  font-size: clamp(40px, 7vw, 70px);
  font-weight: 100;
  color: var(--color-text);
  line-height: 1.1;
  margin-bottom: 12px;
}

.contact-sub {
  font-size: 16px;
  color: var(--color-text-dim);
  margin-bottom: 36px;
}

.socials {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  color: var(--color-text-muted);
  text-decoration: none;
  transition: all var(--transition-base);
}

.social-link:hover {
  border-color: rgba(255, 255, 255, 0.15);
  color: var(--color-text);
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}

.social-label {
  font-family: var(--font-heading);
  font-size: 12px;
  letter-spacing: 2px;
}

@media only screen and (max-width: 768px) {
  .socials {
    gap: 10px;
  }

  .social-link {
    padding: 8px 14px;
  }
}
</style>
