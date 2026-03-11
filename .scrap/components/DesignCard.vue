<template>
  <div class="tech-card" @click="openLink">
    <div class="card-image">
      <img :src="progBanner" alt="Design Preview" loading="lazy" />
      <div class="tech-overlay"></div>
    </div>
    <div class="card-content">
      <div class="card-header">
        <h3>{{ title }}</h3>
        <div class="design-icon">
          <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
            <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
            <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
            <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.55 0 1-.45 1-1 0-2 2-2 2-2v-2c0-1.1.9-2 2-2h2c1.1 0 2-.9 2-2 0-5.5-4.5-10-10-10z"></path>
          </svg>
        </div>
      </div>
      <p class="card-desc">{{ content }}</p>
      <div class="card-footer">
        <span class="link-text">VIEW DESIGN</span>
        <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import deafutImg0 from "@/assets/code_img/def.gif";
import deafutImg1 from "@/assets/code_img/def1.gif";
import deafutImg2 from "@/assets/code_img/def2.gif";

const router = useRouter();

const props = defineProps({
  id: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "Design Title",
  },
  content: {
    type: String,
    default: "Design description goes here.",
  },
  link: {
    type: String,
    default: "#",
  },
  imag: {
    type: String,
    default: undefined,
  },
});

const progBanner = computed(() => {
  if (props.imag) {
    return props.imag;
  } else {
    const randomValue = Math.floor(Math.random() * 3);
    const defaults = [deafutImg0, deafutImg1, deafutImg2];
    return defaults[randomValue];
  }
});

const openLink = () => {
  if (props.id) {
    router.push(`/design/${props.id}`);
  } else if (props.link && props.link !== "#") {
    window.open(props.link, "_blank");
  }
};
</script>

<style scoped>
.tech-card {
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 380px;
  background-color: #0a0a0a;
  border: 1px solid #333;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.tech-card:hover {
  border-color: whitesmoke;
  transform: translateY(-4px);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.15), 0 0 30px rgba(255, 255, 255, 0.05);
}

.card-image {
  height: 45%;
  width: 100%;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid #333;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  filter: grayscale(100%);
}

.tech-card:hover .card-image img {
  transform: scale(1.05);
  filter: grayscale(0%);
}

.card-content {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
}

h3 {
  font-family: "Julius Sans One", sans-serif;
  font-size: 20px;
  color: whitesmoke;
  margin: 0;
  line-height: 1.2;
}

.design-icon {
  color: #555;
  transition: all 0.3s ease;
}

.tech-card:hover .design-icon {
  color: whitesmoke;
  filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.8));
  transform: scale(1.1);
}

.card-desc {
  font-family: "K2D", sans-serif;
  font-size: 14px;
  color: #888;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 15px;
}

.card-footer {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
}

.link-text {
  font-family: "K2D", sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: whitesmoke;
  letter-spacing: 1px;
}

.arrow-icon {
  color: whitesmoke;
  transition: transform 0.3s ease;
}

.tech-card:hover .arrow-icon {
  transform: translateX(4px);
}
</style>
