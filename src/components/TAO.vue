<template>
  <div id="tao-box">
    <h1>
      <a
        href="https://thealphaones-tao.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
        >TheAlphaOnes</a
      >
    </h1>
    <img src="/img/tao-img.png" alt="thealphaones photo" id="tao-img-0" />
    <br /><br /><br />
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

    <div id="tao-icon">
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

const text0 = `<a href="https://thealphaones-tao.netlify.app" target="_blank" rel="noopener noreferrer">TheAlphaOnes</a> is a group of passionate developers fueled by a love for technology and innovation. We focus on building creative, user-friendly solutions that shape the future. With our vision of seamless and minimalist design, we’re creating an ecosystem we call <br /> "AURA Lifestyle"—a space for real-world functionality and collaboration. Together, we aim to learn, build, and inspire as we pave the way for a brighter tomorrow.`

const text2 = `We at <a href="https://thealphaones-tao.netlify.app" target="_blank" rel="noopener noreferrer">TheAlphaOnes</a> are more than simply a development team—we are a living example of creativity and enthusiasm driven by a deep love of technology. With a focus on hardware and software solutions, we are leading the way in creating the future.`;

const text1 = `At <a href="https://thealphaones-tao.netlify.app" target="_blank" rel="noopener noreferrer">TheAlphaOnes</a>, we’re driven by a deep love for technology and the endless possibilities it holds. As a team of passionate developers, we focus on creating innovative solutions that blend functionality with creativity. Our mission is simple: to build tools and experiences that stand out and make life more intuitive and enriching.<br /><br />

We believe that technology should naturally fit into everyday life, empowering meaningful connections and simplifying complex processes. That’s why we’re dedicated to crafting exceptional user interfaces and experiences (UI/UX) with a focus on minimalism and functionality. These principles come together in our vision of the "AURA Lifestyle," a unique ecosystem designed to enable both creators and users to thrive.<br /><br />

We are isn’t just about what we build—it’s about who we build for. We’re excited to collaborate with like-minded developers, dreamers, and innovators who share our passion for pushing boundaries and redefining what’s possible.<br /><br />

Stay tuned as we continue to introduce ground-breaking ideas that challenge conventions and expand horizons. The future isn’t just something we imagine; it’s something we’re actively building—one step, one idea, and one project at a time.<br /><br />

Join us as we learn, create, and inspire, paving the way for a brighter and more innovative tomorrow.`;
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
