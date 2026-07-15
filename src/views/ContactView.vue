<script setup>
import { useScrollReveal } from "@/composables/useScrollReveal";
import ContactSection from "@/components/ContactSection.vue";

const { isVisible } = useScrollReveal();
</script>

<template>
  <div id="home">
    <div style="height: 100px"></div>
    <ContactSection :isVisible="isVisible" />
    <div style="height: 120px"></div>
  </div>
</template>
