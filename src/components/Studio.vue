<template>
     <div>
      <h1 >
        <div v-motion-slide-visible-left >Studio</div>
      </h1>
         <div id="studio-tabs-bar" v-motion-slide-visible-bottom>
            <div id="tab-code" :style="ActiveStyle[0]" @click="()=>{isActive = 0}">Code</div>•
            <div id="tab-design" :style="ActiveStyle[1]" @click="()=>{isActive = 1}">Design</div>•
            <div id="tab-blog" :style="ActiveStyle[2]" @click="()=>{isActive = 2}">Blogs</div>
         </div>
    </div>
    <Transition>
    <Code v-if="isActive === 0" />
   </Transition>

   <Transition>
    <Design v-if="isActive === 1"  /></Transition>
   <Transition>
    <Blogs v-if="isActive === 2"  />
   </Transition>

</template>

<script setup>
import Design from './Design.vue';
import Blogs from './Blogs.vue';
import Code from './Code.vue';
import { computed, ref } from 'vue';

const isActive = ref(0)

const ActiveStyle = computed(()=>{
   if (isActive.value === 0){
      return ["color: whitesmoke;text-decoration: underline whitesmoke;text-decoration-style:dotted ;" , "",""]
   }else if(isActive.value === 1){
      return ["","color: whitesmoke;text-decoration: underline whitesmoke;text-decoration-style:dotted ;" , ""]
   }else{
      return ["","","color: whitesmoke;text-decoration: underline whitesmoke;text-decoration-style:dotted ;" ]
   }
})

</script>

<style scoped>
#studio-tabs-bar{
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   gap: 15px;
   color: #91919171;
font-size: 30px;



}
#studio-tabs-bar div{
   transition: all ease-in-out 300ms;
   text-decoration: underline black;

   text-decoration-style:dotted ;
   font-size: 40px;
    font-family: 'Italianno', cursive;
    font-weight: 100;
}
#studio-tabs-bar div:hover{
   text-decoration: underline #91919171;
   text-decoration-style:dotted ;
}
</style>
