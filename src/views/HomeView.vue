<script setup>
import Intro from '@/components/Intro.vue';
import TAO from '@/components/TAO.vue';
import Studio from '@/components/Studio.vue';
import Contacts from '@/components/Contacts.vue';
import TimeLine from '@/components/TimeLine.vue';


</script>

<template>
      <div id='home-box'>
      <div id='home-box-child'>
        <Intro/>
        <br />
        <br />
        <TimeLine/>
   <br><br>
        <hr />
        <TAO  />
        <br />
        <hr />
        <Studio/>
        <br />
        <hr />
        <Contacts/>
        <br />


      </div>
    </div>
</template>


<style >
h1{
    color: whitesmoke;
    font-size: 60px;
    font-family: 'Italianno', cursive;
    font-weight: 100;
    animation: slideInFromLeft 850ms forwards;
}
p{
    color: #919191;
    font-size: 20px;
    text-align: left;
    line-height: 28px;
    font-family: 'K2D', sans-serif;
    font-weight: 100;
    animation: slideInFromLeft 950ms forwards;
}

#home-box{
    margin-top: 20px;
    margin-bottom: 100px;
    display: flex;
    justify-content: center;
    align-items: center;


}

#home-box-child{
    width: 40vw;
}

@media only screen and (max-width: 768px) {
    /* For mobile phones: */

    h1{
        font-size: 55px;
    }
    p{
        font-size: 15px;
        line-height: 20px;
    }
    #home-box-child{
        width: 90vw;
    }
    #home-box{
        margin-top: 30px;
    }
  }

  @media only screen and (min-width: 600px) {
    /* For tablets: */
    #home-box-child{
        width: 63vw;
    }
  }
</style>
