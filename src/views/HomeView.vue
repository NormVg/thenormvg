<script setup>
import { useScrollReveal } from "@/composables/useScrollReveal";
import HeroSection from "@/components/HeroSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import TechStackSection from "@/components/TechStackSection.vue";
import WorkSection from "@/components/WorkSection.vue";
import GithubSection from "@/components/GithubSection.vue";
import TimelineSection from "@/components/TimelineSection.vue";
import EducationSection from "@/components/EducationSection.vue";
import ExperienceSection from "@/components/ExperienceSection.vue";
import BlogSection from "@/components/BlogSection.vue";
import FreelanceSection from "@/components/FreelanceSection.vue";
import SpotifySection from "@/components/SpotifySection.vue";
import ContactSection from "@/components/ContactSection.vue";

const { isVisible } = useScrollReveal();
</script>

<template>
  <div id="home">
    <HeroSection />
    <AboutSection :isVisible="isVisible" />
    <TechStackSection :isVisible="isVisible" />
    <EducationSection :isVisible="isVisible" />
    <ExperienceSection :isVisible="isVisible" />
    <WorkSection :isVisible="isVisible" />
    <BlogSection :isVisible="isVisible" />
    <GithubSection :isVisible="isVisible" />
    <TimelineSection :isVisible="isVisible" />
    <FreelanceSection :isVisible="isVisible" />
    <SpotifySection :isVisible="isVisible" />
    <ContactSection :isVisible="isVisible" />
    <div style="height: 120px"></div>
  </div>
</template>

<style>
/* ═══════════════════════════════════════════════════════════
   HOME LAYOUT
   ═══════════════════════════════════════════════════════════ */

#home {
  padding: 0 40px;
  max-width: 900px;
  margin: 0 auto;
}

/* ═══════════════════════════════════════════════════════════
   SHARED SECTION STYLES
   ═══════════════════════════════════════════════════════════ */

section[data-animate] {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 800ms var(--ease-out-expo),
    transform 800ms var(--ease-out-expo);
}

section[data-animate].visible {
  opacity: 1;
  transform: translateY(0);
}

.section-inner {
  padding: 80px 0;
}

.section-heading {
  font-family: var(--font-heading);
  font-size: 13px;
  letter-spacing: 5px;
  color: var(--color-text-muted);
  margin-bottom: 40px;
  position: relative;
  display: inline-block;
}

.section-heading::after {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 24px;
  height: 1px;
  background: rgba(145, 145, 145, 0.4);
}

/* Glassmorphism (shared by WorkSection cards) */
.glass-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: all var(--transition-base);
}

.glass-card:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.12);
  transform: translateY(-4px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
}

/* ═══════════════════════════════════════════════════════════
   RESPONSIVE
   ═══════════════════════════════════════════════════════════ */

@media only screen and (max-width: 768px) {
  #home {
    padding: 0 16px;
  }

  .section-inner {
    padding: 40px 0;
  }
}

@media only screen and (min-width: 769px) and (max-width: 1024px) {
  #home {
    max-width: 700px;
  }

  .section-inner {
    padding: 0 5%;
  }

  .section-heading {
    margin-bottom: 30px;
    font-size: 11px;
    letter-spacing: 5px;
  }
}
</style>
