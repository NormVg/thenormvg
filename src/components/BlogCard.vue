<template>
    <div id="prog-card-box" @click="openLink">
      <img :src="progBanner" alt="" />
      <h2>{{ prop.title }}</h2>

    </div>
  </template>
  
  <script setup>
  import deafutImg0 from "@/assets/blog_img/def.gif";
  import deafutImg1 from "@/assets/blog_img/def1.gif";
  import deafutImg2 from "@/assets/blog_img/def2.gif";
  
  
  
  import { computed, ref } from "vue";
  
  const prop = defineProps({
    title: {
      typeof: String,
      default: "Heading of abcd and exyasd asdjahsd asdas asda s asdas akdjhn",
    },
    link: {
      typeof: String,
      default: "https://google.com",
    },
    imag: {},
  });
  
  // const defimg = ref();
  
  const progBanner = computed(() => {
    if (prop.imag !== undefined) {
      return prop.imag;
    } else {
      let randomValue = Math.floor(Math.random() * 3);
      if (randomValue === 0) {
        return deafutImg0;
      } else if (randomValue === 1) {
        return deafutImg1;
      }else {
        return deafutImg2;
      }
    }
  });
  
  const openLink = () => {
    window.open(prop.link, "_blank");
  };
  </script>
  
  <style scoped>
  h2 {
    font-family: "Julius Sans One", serif;
    font-weight: 400;
    font-style: normal;
    color: whitesmoke;
  
    font-size: 27px;
    position: relative;
    top: -65%;
    margin-left: 10px;
  }
  #prog-card-box > div {
    color: whitesmoke;
  
    margin-left: 10px;
    font-size: 15px;
    position: relative;
    top: -75%;
    font-family: "K2D", sans-serif;
    font-weight: 100;
  }
  
  #prog-card-box img {
    transition: all ease-in-out 200ms;
    aspect-ratio: 5/3;
    width: 350px;
  
    filter: opacity(0.4);
  
    position: relative;
    top: 0%;
  }
  
  #prog-card-box img:hover {
    filter: none;
  }
  
  #prog-card-box {
    aspect-ratio: 5/3;
    width: 350px;
    /* height: 300px; */
    border: 1px solid whitesmoke;
    border-radius: 15px;
    transition: all ease-in-out 300ms;
    overflow: hidden;
  }
  #prog-card-box:hover {
    border: 1px solid whitesmoke;
    background-color: rgba(245, 245, 245, 0.05);
  }
  </style>
  