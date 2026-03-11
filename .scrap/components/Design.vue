<template>
  <div id="design-list">
    <DesignCard v-for="item in design.projects" :key="item.title" :id="item.id" :title="item.title" :content="item.content" :link="item.link" :imag="item?.imag"/>
  </div>
</template>

<script setup>
import DesignCard from "./DesignCard.vue";
import { design } from "../../config/design";
</script>

<style scoped>
#design-list {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  #design-list {
    flex-direction: column;
  }
}

@media only screen and (min-width: 600px) {
  /* For tablets: */
  #design-list {
    /* grid-template-columns: 48% 48%; */
  }
}
</style>
