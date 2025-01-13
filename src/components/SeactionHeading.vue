<script setup>
defineProps({
  head1: {
    type: String,
    default: 'Heading',
  }
})
</script>

<template>
  <div class="heading-box">
    <h1>{{ head1 }}</h1>
   
  </div>
</template>

<style scoped>
.heading-box {
  color: #febaad;
  margin-top: 100px;
  margin-bottom: 100px;
}
h1 {
  font-family: 'Inria Serif', serif;
  font-weight: 400;
  font-style: normal;
  font-size: 50px;
  margin: 5px 40px;
  animation: slideInFromLeft 500ms forwards;
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
  /* For mobile phones: */
  h1 {
    font-family: 'Inria Serif', serif;
    font-weight: 400;
    font-style: normal;
    font-size: 15px;
    margin: 5px 25px;
    animation: slideInFromLeft 500ms forwards;
  }


}
</style>