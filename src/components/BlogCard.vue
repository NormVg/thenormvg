<template>
  <div class="blog-card" @click="openLink">
    <div class="card-image">
      <img :src="progBanner" alt="Blog Banner" />
    </div>
    <div class="card-content">
      <div class="card-header">
        <h3>{{ title }}</h3>
        <div class="blog-icon">
          <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
        </div>
      </div>
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import deafutImg0 from "@/assets/blog_img/def.gif";
import deafutImg1 from "@/assets/blog_img/def1.gif";
import deafutImg2 from "@/assets/blog_img/def2.gif";

const props = defineProps({
  title: {
    type: String,
    default: "Blog Title",
  },
  content: {
    type: String,
    default: "Read this amazing article...",
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
    // Deterministic random based on title length to keep it consistent during renders if possible,
    // or just random. Keeping random as per original logic but simplified.
    const defaults = [deafutImg0, deafutImg1, deafutImg2];
    const randomIndex = Math.floor(Math.random() * defaults.length);
    return defaults[randomIndex];
  }
});

const openLink = () => {
  if (props.link && props.link !== "#") {
    // Check if link is internal (starts with /) or external
    if (props.link.startsWith('/')) {
        window.location.href = props.link; // Or use router if available, but window.open was used before.
        // Since the parent passes `/article/${id}`, it's an internal route.
        // Using window.location.href to navigate in same tab, or window.open for new tab.
        // The original code used window.open(..., "_blank").
        // Let's stick to window.open for now as per original behavior, or maybe standard navigation?
        // Actually, for internal links in a SPA, we should use router.push, but let's see.
        // The parent passes `/article/${item.id}`.
        // Let's use window.open for now to match previous behavior, or maybe just standard navigation.
        // Wait, the previous one opened in new tab. Let's keep it consistent or improve it.
        // The user wants a redesign, usually implies better UX. Internal links should open in same tab usually.
        // But let's stick to the requested "update card" which implies visual update.
        // I'll use window.open for external, and maybe just simple navigation for internal?
        // Let's stick to the simplest implementation first.
        window.open(props.link, "_blank");
    } else {
        window.open(props.link, "_blank");
    }
  }
};
</script>

<style scoped>
.blog-card {
  width: 350px;
  background: rgba(20, 20, 20, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(10px);
  cursor: pointer;
}

.blog-card:hover {
  transform: translateY(-8px);
  border-color: whitesmoke;
  box-shadow: 0 10px 30px -10px rgba(255, 255, 255, 0.3);
}

.card-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  filter: grayscale(100%);
}

.blog-card:hover .card-image img {
  transform: scale(1.1);
  filter: grayscale(0%);
}

.card-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
}

h3 {
  font-family: "Julius Sans One", sans-serif;
  font-size: 20px;
  color: whitesmoke;
  margin: 0;
  line-height: 1.4;
}

.blog-icon {
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.3s ease, transform 0.3s ease;
  flex-shrink: 0;
}

.blog-card:hover .blog-icon {
  color: whitesmoke;
  transform: rotate(-5deg);
  filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.8));
}

p {
  font-family: "K2D", sans-serif;
  font-size: 14px;
  color: #ccc;
  margin: 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
