<template>
  <section id="listening" data-animate :class="{ visible: isVisible['listening'] }">
    <div class="section-inner">
      <h2 class="section-heading">NOW LISTENING</h2>
      <div class="spotify-wrapper">
        <iframe data-testid="embed-iframe" style="border-radius: 12px"
          src="https://open.spotify.com/embed/track/1hlgWN4erCHPTVV7qhY6we?utm_source=generator" width="100%"
          height="152" frameborder="0" allowfullscreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({ isVisible: Object });
</script>

<style scoped>
.spotify-wrapper {
  width: 100%;
  opacity: 0.9;
  transition: opacity var(--transition-base);
}

.spotify-wrapper:hover {
  opacity: 1;
}
</style>
