<template>
  <div id="con-box">
    <div v-motion-slide-visible-left>
      <h1>Find me</h1>
    </div>

    <div id="vg-icon" v-motion-slide-visible-bottom>
      <a
        id="ico-ele-vg"
        href="https://github.com/NormVg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span
          ><img src="/img/icon/github-logo.svg" alt="vishnu github" />
          GitHub</span
        >
      </a>

      <a
        id="ico-ele-vg"
        href="https://instagram.com/vishnu_gupta_vg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span
          ><img src="/img/icon/instagram-logo.svg" alt="vishnu github" />
          Instagram</span
        >
      </a>

      <a
        id="ico-ele-vg"
        href="https://discordapp.com/users/943907992145911818"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span
          ><img src="/img/icon/discord-logo.svg" alt="vishnu github" />
          Discord</span
        >
      </a>

      <a
        id="ico-ele-vg"
        href="https://twitter.com/TheNormVg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span
          ><img src="/img/icon/twitter-logo.svg" alt="vishnu github" />
          Twitter</span
        >
      </a>

      <a
        id="ico-ele-vg"
        href="mailto:thenormvg@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span
          ><img src="/img/icon/envelope.svg" alt="vishnu github" /> Mail</span
        >
      </a>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
#vg-icon {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 5px;
  padding-right: 5px;
}

#vg-icon img {
  width: 25px;
  padding-right: 5px;
}

#ico-ele-vg {
  padding: 5px;
  margin: 15px;
}

#vg-icon a {
  font-family: "K2D", sans-serif;
  text-decoration: none;
}

#vg-icon span {
  transition: all ease-in-out 300ms;
  color: #919191;
  border-bottom: 1px #919191 solid;
}
#vg-icon span:hover {
  color: whitesmoke;
  border-bottom: 1px white solid;
}
</style>
