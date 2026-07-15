<script setup>
import { useScrollReveal } from "@/composables/useScrollReveal";
import WorkSection from "@/components/WorkSection.vue";
import GithubSection from "@/components/GithubSection.vue";

const { isVisible } = useScrollReveal();
</script>

<template>
  <div id="home">
    <div style="height: 100px"></div>
    <WorkSection :isVisible="isVisible" />
    <GithubSection :isVisible="isVisible" />
    <div style="height: 120px"></div>
  </div>
</template>
