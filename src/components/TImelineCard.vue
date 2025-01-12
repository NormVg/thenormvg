<template>
  <div id="tlc-box">
    <div id="tlc-circle"></div>
    <div id="tlc-text" @mouseenter="()=>{isHover = true}" @mouseleave="()=>{isHover = false}" >
    
        


        <!-- <span v-if="!isHover"  class="span-block-animation" v-for="item, iter in prop.textLess.split(' ')" :key="item" :style="`animation-duration: calc(1s + ${iter*25}ms);`">{{ `${item} ` }} </span>
        <span v-if="isHover"  class="span-block-animation" v-for="item, iter in prop.textMore.split(' ')" :key="item" :style="`animation-duration: calc(1s + ${iter*25}ms);`"> {{ `${item} ` }} </span> -->
    </div>
    

    <div id="tlc-date">{{ prop.date }}</div>
  </div>
</template>

<script setup>

import { ref } from 'vue';
const prop =  defineProps({
    date:{
        default:"29•10•2024"
    },
    textLess:{
        default:"Won a hackathon"
    },
    textMore:{
        default:"Won a Hackthorn by Ellenox summer hack week, got second position, Build Eventually new way of micro journaling."
    }

})

const isHover = ref(false)

</script>

<style scoped>
#tlc-box{
    margin: 0px 100px;
    /* transition: all ease-in-out 2s; */

    /* margin-top: 1.7%; */
}
#tlc-circle {
  background-color: whitesmoke;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  margin-left: 10px;
  margin-bottom: 5px;

}
#tlc-date{
    font-family: 'K2D', sans-serif;
    font-weight: 100;
    color: #919191;
}
#tlc-text{
    font-family: 'K2D', sans-serif;
    font-weight: 100;
    color: whitesmoke;
    border:1px solid grey;
    border-radius: 10px;
    background-color: rgba(245, 245, 245, 0.05);
    width: fit-content;
    /* height: 30px; */
    /* width: 140px; */
    padding: 10px 10px;
    max-width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2px;
    transition: all ease-in-out 200ms;
}
#tlc-text:hover{
    border:1px solid whitesmoke;
    background-color: rgba(245, 245, 245, 0.09);
}

.span-block-animation{
    animation-name: faderOut;
    
    margin-right: 5px;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    opacity: 0;
}
@keyframes faderOut {
    from {
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}

</style>
