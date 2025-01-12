<template>
  
<div id="timeline-box">

<div id="timeline-line"></div>

<div id="tl-con">
    <Vue3Marquee
    
        :duration="55"
        :pause-on-hover="true"
        :gradient="true"
        :gradient-color="[0, 0, 0]"
        gradient-length="15%"
    >

        <TImelineCard/>
        <TImelineCard/>

        <TImelineCard/>
        <TImelineCard/>
        <TImelineCard/>

    </Vue3Marquee>
</div>

</div>

</template>

<script setup>
import { Vue3Marquee } from 'vue3-marquee';
import TImelineCard from './TImelineCard.vue';
</script>

<style scoped>
#tl-con{
    width: 98vw;
    height: 100%;
    
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding-top: 60px;
    /* padding-top: 20%; */
}

#timeline-box{

height: 100px;
position: relative;

margin-bottom: 200px;
}

#timeline-line{
    width: 98vw ;
    height: 1px;
    border-bottom:1px solid whitesmoke;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
</style>