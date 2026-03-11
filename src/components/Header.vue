<template>
  <header id="header">
    <div id="header-left">
      <a href="/">
        <img :src="sign" alt="Vishnu Gupta signature" id="header-sign" />
      </a>
    </div>

    <nav id="header-nav">
      <a v-for="(link, i) in navLinks" :key="link.label" :href="link.href" class="nav-link"
        :style="{ animationDelay: `${600 + i * 100}ms` }">
        {{ link.label }}
      </a>
    </nav>
  </header>
</template>

<script setup>
import sign from "@/assets/sign.png";

const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "WORK", href: "#work" },
  { label: "CONTACT", href: "#contact" },
];
</script>

<style scoped>
#header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  pointer-events: none;
}

#header>* {
  pointer-events: auto;
}

#header-sign {
  width: 170px;
  opacity: 0;
  animation: slideInFromLeft 800ms var(--ease-out-expo) forwards;
}

#header-nav {
  display: flex;
  gap: 40px;
}

.nav-link {
  font-family: var(--font-heading);
  font-size: 13px;
  letter-spacing: 3px;
  color: var(--color-text-muted);
  text-decoration: none;
  position: relative;
  opacity: 0;
  animation: fadeIn 600ms var(--ease-out-expo) forwards;
  transition: color 350ms ease;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--color-text);
  transition: width 350ms var(--ease-out-expo);
}

.nav-link:hover {
  color: var(--color-text);
}

.nav-link:hover::after {
  width: 100%;
}

@media only screen and (max-width: 768px) {
  #header {
    padding: 16px 20px;
    position: relative;
  }

  #header-sign {
    width: 140px;
  }

  #header-nav {
    gap: 24px;
  }

  .nav-link {
    font-size: 11px;
    letter-spacing: 2px;
  }
}
</style>
