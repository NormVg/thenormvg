<template>
  <div id="blog-box">
    <!-- BLOGS COMMMING SOON......... -->
  <BlogCard v-for="item in BlogsListJson" :key="item" :title="item.title" :content="item.content" :link="`/article/${item.id}`"  />
  <!-- <BlogCard/>

  <BlogCard/>      -->

  </div>
</template>

<script setup>
import BlogCard from './BlogCard.vue';
import BlogsListJson from '@/assets/data/Blogs.json'

</script>

<style scoped>


#blog-box {
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
  #blog-box {
    grid-template-columns: auto;
  }
}

@media only screen and (min-width: 600px) {
  /* For tablets: */
  #blog-box {
    grid-template-columns: 48% 48%;
    row-gap: 10px;
    column-gap: 20px;
  }
}
</style>
