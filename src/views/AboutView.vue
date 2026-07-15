<script setup>
import { useScrollReveal } from "@/composables/useScrollReveal";
import AboutSection from "@/components/AboutSection.vue";
import TechStackSection from "@/components/TechStackSection.vue";
import ExperienceSection from "@/components/ExperienceSection.vue";
import EducationSection from "@/components/EducationSection.vue";
import TimelineSection from "@/components/TimelineSection.vue";

const { isVisible } = useScrollReveal();
</script>

<template>
  <div id="home">
    <div style="height: 100px"></div>
    <AboutSection :isVisible="isVisible" />
    <TechStackSection :isVisible="isVisible" />
    <ExperienceSection :isVisible="isVisible" />
    <EducationSection :isVisible="isVisible" />
    <TimelineSection :isVisible="isVisible" />
    <div style="height: 120px"></div>
  </div>
</template>
