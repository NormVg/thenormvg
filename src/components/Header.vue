<template>
      <div id='header-box'>
      
      <img :src="sign" alt="vishnu gupta sign" />
  
  </div>
</template>

<script setup>
import sign from "@/assets/sign.png"
</script>

<style scoped>

#header-box img{
    width: 190px;
    margin: 12px;
    /* margin-left: 0px; */
    position: fixed;
}

@media only screen and (max-width: 768px) {
    /* For mobile phones: */
    
    #header-box img{
        width: 160px;
        position: unset;
    }

  }
</style>