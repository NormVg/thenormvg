<template>
  <div id="pj-list">



    <ProjectCardNew v-for="item in prog.projects" :key="item.title" :title="item.title" :content="item.content" :link="item.link" :imag="item?.imag"/>

  </div>
</template>

<script setup>
import ProjectCardNew from "./ProjectCardNew.vue";



import { prog } from "../../config/prog";

</script>

<style scoped>
#pj-list {
  /* display: grid;
    grid-template-columns: 50% 50%;
    row-gap: 4px;
    column-gap: 4px; */
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
  #pj-list {
    grid-template-columns: auto;
  }
}

@media only screen and (min-width: 600px) {
  /* For tablets: */
  #pj-list {
    grid-template-columns: 48% 48%;
    row-gap: 10px;
    column-gap: 20px;
  }
}
</style>
