<template>
  <section id="blog" data-animate :class="{ visible: isVisible['blog'] }">
    <div class="section-inner">
      <h2 class="section-heading">WRITING</h2>
      <div class="blog-list">
        <a v-for="(post, i) in posts" :key="post.title" :href="post.link" target="_blank" class="blog-item"
          :style="{ animationDelay: `${i * 80}ms` }">
          <div class="blog-left">
            <span class="blog-num">{{ String(i + 1).padStart(2, '0') }}</span>
            <span class="blog-tag">{{ post.tag }}</span>
          </div>
          <div class="blog-center">
            <h3 class="blog-title">{{ post.title }}</h3>
            <p class="blog-desc">{{ post.desc }}</p>
          </div>
          <div class="blog-right">
            <span class="blog-date">{{ post.date }}</span>
            <ArrowUpRight class="blog-arrow" :size="15" />
          </div>
        </a>
      </div>
      <a :href="blogViewAllLink" target="_blank" class="view-all">
        All writing
        <ArrowUpRight :size="13" />
      </a>
    </div>
  </section>
</template>

<script setup>
import { ArrowUpRight } from "lucide-vue-next";
import { blogPosts as posts, blogViewAllLink } from "../../portfolio.config.js";
defineProps({ isVisible: Object });
</script>

<style scoped>
.blog-list {
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;
}

/* Horizontal row style — like a magazine index */
.blog-item {
  display: grid;
  grid-template-columns: 80px 1fr auto;
  gap: 20px;
  align-items: start;
  padding: 20px 0;
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  transition: all 0.25s ease;
}

.blog-item:first-child {
  border-top: 1px solid rgba(255, 255, 255, 0.04);
}

.blog-item:hover {
  padding-left: 8px;
}

.blog-left {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-top: 3px;
}

.blog-num {
  font-family: var(--font-mono);
  font-size: 14px;
  color: rgba(255, 255, 255, 0.32);
  letter-spacing: 2px;
}

.blog-tag {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--color-text-muted);
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  padding: 2px 6px;
  border-radius: 2px;
  width: fit-content;
}

.blog-title {
  font-family: var(--font-heading);
  font-size: 14px;
  letter-spacing: 1.5px;
  color: var(--color-text);
  font-weight: 400;
  margin-bottom: 6px;
  transition: color 0.25s ease;
}

.blog-item:hover .blog-title {
  color: #fff;
}

.blog-desc {
  font-size: 13px;
  color: var(--color-text-dim);
  line-height: 1.6;
}

.blog-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  padding-top: 3px;
}

.blog-date {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-text-muted);
}

.blog-arrow {
  color: var(--color-text-muted);
  transition: transform 0.25s ease, color 0.25s ease;
}

.blog-item:hover .blog-arrow {
  transform: translate(3px, -3px);
  color: var(--color-text);
}

.view-all {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 2px;
  color: var(--color-text-muted);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: color 0.25s ease;
}

.view-all:hover {
  color: var(--color-text);
}

@media only screen and (max-width: 600px) {
  .blog-item {
    grid-template-columns: 60px 1fr;
    grid-template-rows: auto auto;
  }

  .blog-right {
    grid-column: 2;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
