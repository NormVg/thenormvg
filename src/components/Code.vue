<template>
  <div id="pj-list">
    <ProjectCard
      title="Kraken"
      content="'NEW' code editor, made with new flavour, design pattern and theory "
      link="https://github.com/NormVg/Kraken"
      :imag="kraken"
    />

    <ProjectCard
      title="AutoCaptionGenAI"
      content="Seamlessly transcribe, translate, and generate subtitles from video files with precision."
      link="https://github.com/NormVg/AutoCaptionGenAI"
    />

    <ProjectCard
      title="J.A.M"
      content="Just AppImage Manager for linux"
      link="https://github.com/TheAlphaOnes/jam"
    />

    <ProjectCard
      title="Grim.Vex"
      content="Arc is Shit, I created my own browser"
      link="https://github.com/NormVg/Grim"
      :imag="grim"
    />

    <ProjectCard
      title="Eventually"
      content="Eventually is a reimagining of journaling , dynamically provide Nostalgia and Calmness "
      link="https://github.com/NormVg/ChatBotGpt"
      :imag="eventualy"
    />

    <ProjectCard
      title="Batman ChatRoom"
      content="Batman 2022 inspired terminal like web Chatroom"
      link="https://batmanchatroom.vercel.app/"
      :imag="batman"
    />

    <ProjectCard
      title="ChatBotGpt"
      content="A gpt-2 based custom chatbot which can be finetuned"
      link="https://github.com/NormVg/ChatBotGpt"
    />

    <ProjectCard
      title="Dusic"
      content="A youtube based music player which I made because I hated ads"
      link="https://dusic.netlify.app/"
    />
  </div>
</template>

<script setup>
import ProjectCard from "./ProjectCard.vue";

import batman from "@/assets/code_img/batman.gif";
import eventualy from "@/assets/code_img/eventually.gif";
import grim from "@/assets/code_img/grim.gif";
import kraken from "@/assets/code_img/kraken.gif";
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
