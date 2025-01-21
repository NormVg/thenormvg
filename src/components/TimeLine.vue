<script setup>
import { ref } from 'vue'
import TimelineEvent from './TimelineEvent.vue'
import JournalTimeLineJson from "@/assets/data/Timeline.json"
const events = ref([...JournalTimeLineJson])


</script>

<template>
  <div class="timeline-container">
    

    <div class="timeline" >
    <Vue3Marquee
        
        :duration="95"
        :pause-on-hover="true"
        :gradient="true"
        :gradient-color="[0, 0, 0]"
        gradient-length="10%"
        >


      <div class="timeline-content">
        <div class="line"></div>
        <TimelineEvent
          v-for="event in events"
          :key="event.id"
          :date="event.date"
          :description="event.description"
        />
      </div>
      
    </Vue3Marquee>
  </div>

  </div>
</template>

<style scoped>
.timeline-container {
  width: 100%;
  /* background: #000; */
  position: relative;
  
  color: white;
  padding: 0px 0px;
  
}

.title {
  text-align: left;
  padding-left: 40px;
  margin-bottom: 60px;
  font-family: serif;
  font-style: italic;
  font-size: 2.5rem;
}

.timeline {
  width: 95vw;
  position:  absolute;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  position: relative;
}

.timeline-content {
  display: flex;
  position: relative;
  white-space: nowrap;
}

.line {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: white;
  opacity: 0.3;
}

@media (max-width: 768px) {
  .title {
    font-size: 2rem;
    padding-left: 20px;
  }
}
</style>