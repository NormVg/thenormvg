<script setup >
import { ref, onMounted, onUnmounted } from 'vue'
// import TimelineEvent from './TimelineEvent.vue'
import { Vue3Marquee } from 'vue3-marquee'
import TimelineEvent from './TimelineEvent.vue'
import TimelineJson from "@/assets/data/Timeline.json"

const events = ref([...TimelineJson])

</script>

<template>
    <div id="timeline-box">
  <div class="timeline-container">
    <div class="timeline-line"></div>


    <div id="tlc">
    <Vue3Marquee style="height: 50vh; "
    
    :clone="true"
        :duration="35"
        :pause-on-hover="true"
        :gradient="true"
        :gradient-color="[0, 0, 0]"
        gradient-length="15%"
    >
        <TimelineEvent
        v-for="event in events"
        :key="event.id"
        :date="event.date"
        :title="event.title"
        :description="event.description"
      />
    </Vue3Marquee>
</div>
  </div>
</div>
</template>

<style scoped>


#timeline-box{

/* height: 100px; */
position: relative;

margin-bottom: 300px;
}

#tlc{
    overflow: hidden;
}

.timeline-container {
  width: 95vw;
  height: 50vh;
  overflow: hidden;
  position: relative;
  /* background: #000; */
  display: flex;
  align-items: center;
      position: absolute;
    left: 50%;
    /* top: 50%; */
    transform: translateX(-50%);
    /* border:1px solid red */
}

.timeline-line {
  position: absolute;
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  top: 50%;
  transform: translateY(-50%);
}

.timeline-content {
  display: flex;
  align-items: center;
  height: 100%;
  position: absolute;
  will-change: transform;
  padding: 0 50vw;
}
</style>