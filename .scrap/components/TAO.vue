<template>
  <div id="tao-box">
    <h1 >
      <div v-motion-slide-visible-once-bottom>

        <a
        href="https://thealphaones.com"
        target="_blank"
        rel="noopener noreferrer"

        >TheAlphaOnes</a
        >
      </div>
    </h1>
    <!-- <img src="/img/tao-img.png" alt="thealphaones photo" id="tao-img-0" /> -->

    <div v-motion-slide-visible-once-bottom>
      <img src="/img/tao-img.png" alt="thealphaones photo" id="tao-img-0" />
    </div>
    <br /><br /><br />
    <div v-motion-slide-visible-once-bottom>

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
          ></span>
        </p>
</div>

    <div id="tao-icon" v-motion-slide-visible-once-bottom>
      <a
        href="https://discord.gg/C3qWK3E5JW"
        target="_blank"
        rel="noopener noreferrer"
        className="tao-icon"
        ><img src="/img/icon/discord-logo.svg" alt="discord-tao" /></a
      >•
      <a
        href="https://github.com/TheAlphaOnes/"
        target="_blank"
        rel="noopener noreferrer"
        className="tao-icon"
        ><img src="/img/icon/github-logo.svg" alt="github-tao" /></a
      >•
      <!-- {/* <a href="https://www.instagram.com/thealphaones/" target="_blank" rel="noopener noreferrer" className='tao-icon'><img src="/img/icon/instagram-logo.svg" alt="instagram-tao"   /></a>• */} -->
      <a
        href="https://twitter.com/TheAlphaOnesDev"
        target="_blank"
        rel="noopener noreferrer"
        className="tao-icon"
        ><img src="/img/icon/twitter-logo.svg" alt="twitter-tao" /></a
      >•
      <!-- {/* <a href="https://www.youtube.com/channel/UCiTFCaaj4WGRVL5-BUXxCLw" target="_blank" rel="noopener noreferrer" className='tao-icon'><img src="/img/icon/youtube-logo.svg" alt="youtube-tao"   /></a>• */} -->
      <a href="mailto:thealphaones.work@gmail.com" className="tao-icon"
        ><img src="/img/icon/envelope.svg" alt="mail-tao"
      /></a>
    </div>
  </div>
</template>

<script setup>
import MyTextBlockAnimation from "./MyTextBlockAnimation.vue";
import { ref } from "vue";
const isMore = ref(false);

const text0 = `We are <a href="https://thealphaones.com" target="_blank" rel="noopener noreferrer">TheAlphaOnes</a>, building with passion and purpose. Our focus is on meaningful experiences that spark curiosity and inspire creativity. Join us as we blend technology and human connection to shape a better digital future.`

const text1 = `We are <a href="https://thealphaones.com" target="_blank" rel="noopener noreferrer">TheAlphaOnes</a>, a young, passionate group of builders who love creating real things that people actually use. From dev tools to AI projects and futuristic experiments, we’re here to craft ideas that blend tech with everyday life.<br /><br />

Beyond just a startup-in-the-making, we’re a public community, a place for anyone to connect, collaborate, and help shape the future of software, together. Whether you’re a builder, thinker, or just curious, you’re welcome here.<br /><br />

We aim to create something more than just products or services – we strive to shape a way of living, the Aura lifestyle. A lifestyle that blends technology, creativity, and human connection to redefine how we interact with the world around us.`;
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


#tao-box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10vh;
}

#tao-img-0 {
  width: 700px;
  /* width: 100%; */
}

#tao-box p {
  text-align: left;
}
#tao-box h1 a {
  text-decoration: none;
}
#tao-box h1 a:hover {
  color: #919191;
}

#tao-icon {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.tao-icon img {
  width: 25px;
}
.tao-icon {
  width: 25px;
  margin: 10px;
  padding-left: 7px;
  padding-right: 7px;
  padding-bottom: 3px;
  border-bottom: 1px solid #91919171;
  transition: all ease-in-out 300ms;
}
.tao-icon:hover {
  border-bottom: 1px solid whitesmoke;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  #tao-img-0 {
    width: 350px;
  }
}

@media only screen and (min-width: 599) {
  /* For tablets: */
  #tao-img-0 {
    width: 500px;
  }
}
</style>
