<template>
  <section id="stack" data-animate :class="{ visible: isVisible['stack'] }">
    <div class="section-inner">
      <h2 class="section-heading">TECH STACK</h2>
      <div class="stack-grid">
        <div v-for="(category, index) in stack" :key="category.name" class="stack-category"
          :style="{ animationDelay: `${index * 150}ms` }">
          <h3 class="category-name">{{ category.name }}</h3>
          <div class="tech-list">
            <span v-for="tech in category.items" :key="tech" class="tech-item">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({ isVisible: Object });

const stack = [
  {
    name: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Go", "SQL", "HTML/CSS"],
  },
  {
    name: "Frontend",
    items: ["Vue.js", "Nuxt", "React", "React Native", "Tailwind CSS", "Three.js", "Figma"],
  },
  {
    name: "Backend & Auth",
    items: ["Node.js", "Hono", "Express", "Go", "Postgres", "Redis", "Drizzle ORM", "Supabase", "Better Auth"],
  },
  {
    name: "AI & Tools",
    items: ["Ollama", "AI SDK", "Langchain", "OpenAI", "Git", "Docker", "Vercel", "Cloudflare", "Electron", "OpenRouter", "Cloudflare",],
  },
  {
    name: "Hardware & IoT",
    items: ["IoT", "Arduino", "ESP32", "Raspberry Pi", "OLED Screens", "Servos", "Sensors"],
  },
];
</script>

<style scoped>
.stack-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 32px;
  margin-top: 10px;
}

.stack-category {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.category-name {
  font-family: var(--font-heading);
  font-size: 13px;
  letter-spacing: 3px;
  color: var(--color-text);
  font-weight: 400;
  text-transform: uppercase;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  padding-bottom: 8px;
  display: inline-block;
  margin-bottom: 4px;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-item {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--color-text-dim);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 4px 12px;
  border-radius: 20px;
  transition: all var(--transition-base);
  cursor: default;
}

.tech-item:hover {
  color: var(--color-text);
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

@media only screen and (max-width: 768px) {
  .stack-grid {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-top: 5px;
  }

  .tech-list {
    gap: 6px;
  }

  .tech-item {
    font-size: 11px;
    padding: 3px 10px;
  }

  .stack-category {
    gap: 12px;
  }
}
</style>
