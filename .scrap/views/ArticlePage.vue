<script setup>
import SeactionHeading from "@/components/SeactionHeading.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import VueMarkdown from "vue-markdown-render";
import MarkdownItAnchor from "markdown-it-anchor";
import "@/assets/markdown.css";
import BlogsListJson from "@/assets/data/Blogs.json";

function getFileById(id) {
  const article = BlogsListJson.find((article) => article.id === id);
  return article ? article.file : null;
}

function getTitleById(id) {
  const article = BlogsListJson.find((article) => article.id === id);
  return article ? article.title : null;
}

const route = useRoute();
const options = { html: true };
const src = ref("");
const plugins = [MarkdownItAnchor];
const articleId = ref(route.params.id);

const fileName = getFileById(articleId.value);

console.log(fileName, articleId.value);
onMounted(async () => {
  try {
    const response = await fetch("/markdown/" + fileName);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    src.value = await response.text();
  } catch (error) {
    console.error("Error fetching markdown file:", error);
  }
});
</script>

<template>
  <div id="article-box">
    <div class="heading-box">
        <h1>{{ getTitleById(articleId) }}</h1>
      </div>
    <div class="markdown-content">

      <VueMarkdown :source="src" :options="options" :plugins="plugins" />
    </div>
  </div>
</template>

<style>

.heading-box {
  /* color: #febaad; */
  margin-top: 100px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  display: flex;

}
.heading-box  h1 {
  font-family: "Julius Sans One", serif !important;
  font-weight: 400;
  font-style: normal;
  font-size: 40px !important;
  margin: 5px 40px;
  width: 65vw;
  animation: slideInFromLeft 500ms forwards;
}

#article-box {
  margin-top: 100px;
  /* width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center; */
}
.markdown-content p {
  width: 90%;
}

#cen-img{
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;

}

#cen-img img{
  /* border: 1px solid red; */

  width: 80%;
}

.markdown-content img {
  width: 30vw;
  margin: 0% auto !important;
  left: 50%;
  /* margin-left: auto;
  margin-right: auto; */
}

.markdown-content h3 {
  animation: slideInFromLeft 850ms forwards;
}

.markdown-content h1 {
  font-size: 3rem !important;
  font-family: "K2D", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.markdown-content a {
  text-decoration: underline #91919171 1px;
  color: whitesmoke;
  margin-left: 1px;
  font-size: 20px;
  transition: all ease-in-out 300ms;
}
.markdown-content a:hover {
  text-decoration: underline whitesmoke 1px;
}

.markdown-content {
  font-family: "K2D", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: whitesmoke;
  line-height: 1.6;
  width: 65vw;
  margin: 0% auto !important;
  background: none !important;
  margin-bottom: 10vh !important;
  animation: slideInFromLeft 1s forwards;
}
@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@media only screen and (max-width: 768px) {
  .markdown-content p {
    width: 100%;
  }
  /* For mobile phones: */
  p:has(img) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .markdown-content {
    width: 90vw;
  }

  .markdown-content img {
    width: 80vw;
    margin: 0% auto !important;
  }

  .heading-box h1 {
    width: 90vw !important;
    font-size: 28px !important;
    margin: 0;
}
}
</style>
