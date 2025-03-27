<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";

import { Analytics } from "@vercel/analytics/vue";
</script>

<template>
  <Header />

  <RouterView />
  <Analytics />
</template>

<style scoped></style>
