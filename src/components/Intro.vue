<template>
  <div id="intro-box">
    <h1>Vishnu Gupta</h1>
    <p>
      <MyTextBlockAnimation v-if="!isMore" :text="text0" />
      <MyTextBlockAnimation v-if="isMore" :text="text1" />
      <span
        >-
        <span
          id="intro-toggle"
          @click="
            () => {
              isMore = !isMore;
            }
          "
          >{{ isMore ? "less" : "more" }}</span
        ></span
      >
    </p>
  </div>
  <!-- <TimeLine/> -->

</template>

<script setup>
import { ref } from "vue";
import MyTextBlockAnimation from "./MyTextBlockAnimation.vue";
// import TimeLine from "./TimeLine.vue";
const text0 = `Hi, I’m Vishnu Gupta—better known as NormVg. I’m a 19-year-old full-stack developer, UI designer, and someone who loves experimenting with AI. I’ve been coding for 5 years now, and I’m all about turning wild ideas into reality. Beyond tech, I’m a fan of hip-hop, movies, cooking, and meaningful conversations. Whether I’m building projects or vibing with the community, I’m here to create, share, and connect.`;

const text1 = `Hello! I'm Vishnu Gupta, but you might know me better as NormVg. At 19 years old, I wear multiple hats: I'm a full-stack developer, UI Designer (and a self-proclaimed UI critique) and Working with AI's a Lot. <br /><br /> Beyond coding, I'm building <a href="https://thealphaones-tao.netlify.app" target="_blank" rel="noopener noreferrer"> TheAlphaOnes </a> , a "Crazy Shit" Developer Team. <br />I also Leading of <a href="https://discord.gg/C3qWK3E5JW" target="_blank" rel="noopener noreferrer">TAO Community</a> of Crack Head's, who  'build in public' helaa yaa my kinda community right?? 
<br /><br />
My love for engineering and technology is limitless. Bringing thoughts to life directly from the blank slate of my fantasies and imagination is really satisfying and calming and making me crazy at the same time. and in part-time also taking part into hackathons and We also won one recently yeeee!!!!!
<br /><br />
Outside the digital realm, I'm a lover of hip-hop music. Occasionally, you might catch me penning down verses that resonate with my soul. Cooking is another realm where I find comfort, alongside indulging in movies and cherished moments with friends. Oh, and did I mention? I have a liking for engaging conversations. 
<br /><br />
And hey, a fancy chat? Slide into my DMs. Maybe we can chat on a personal meetings or podcast, and I promise not to steal the show... too much!`;

const isMore = ref(false);
</script>

<style scoped>
#intro-toggle {
  text-decoration: underline #91919171 1px;
  color: whitesmoke;
  margin-left: 1px;
  transition: all ease-in-out 300ms;
}
#intro-toggle:hover {
  text-decoration: underline whitesmoke 1px;
}

#intro-box {
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
}
</style>
