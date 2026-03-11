<template>
  <div class="design-page" v-if="project">
    <div class="header">
      <h1>{{ project.title }}</h1>
      <p>{{ project.content }}</p>
    </div>

    <div class="main-image">
      <img :src="currentImage" alt="Main Project Image" />
    </div>

    <div class="gallery-grid">
      <div v-for="(img, index) in project.images" :key="index" class="gallery-item" @click="updateImage(img)">
        <img :src="img" alt="Gallery Image" loading="lazy" />
      </div>
    </div>
  </div>
  <div v-else class="not-found">
    <h1>Project Not Found</h1>
    <router-link to="/">Go Home</router-link>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { design } from '../../config/design';

const route = useRoute();
const projectId = route.params.id;

const project = computed(() => {
  return design.projects.find(p => p.id === projectId);
});

const currentImage = ref('');

watch(project, (newProject) => {
  if (newProject) {
    currentImage.value = newProject.imag;
  }
}, { immediate: true });

const updateImage = (img) => {
  currentImage.value = img;
};
</script>

<style scoped>
.design-page {
  padding: 100px 20px 50px;
  max-width: 1200px;
  margin: 0 auto;
  color: whitesmoke;
  font-family: 'K2D', sans-serif;
}

.header {
  text-align: center;
  margin-bottom: 50px;
  animation: fadeInDown 0.8s ease;
}

h1 {
  font-family: 'Julius Sans One', sans-serif;
  font-size: 48px;
  margin-bottom: 20px;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

p {
  font-size: 18px;
  color: #ccc;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.main-image {
  width: 100%;
  height: 500px;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 40px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  animation: fadeInUp 1s ease;
}

.main-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  animation: fadeInUp 1.2s ease;
}

.gallery-item {
  height: 250px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.gallery-item:hover {
  transform: scale(1.02);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
  border-color: whitesmoke;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.not-found {
  text-align: center;
  padding-top: 150px;
  color: whitesmoke;
}

.not-found a {
  color: #00f3ff;
  text-decoration: none;
  font-size: 20px;
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  h1 { font-size: 36px; }
  .main-image { height: 300px; }
}
</style>
