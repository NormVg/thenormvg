<script setup lang="ts">
interface Props {
  date: string
  title: string
  description: string
}

defineProps<Props>()
</script>

<template>
  <div class="timeline-event">
    <div class="event-dot-container">
      <div class="event-dot"></div>
    </div>
    <div class="event-info">
      <div class="event-date">{{ date }}</div>
      <div class="event-title">{{ title }}</div>
    </div>
    <div class="event-tooltip">
      <div class="event-description">{{ description }}</div>
    </div>
  </div>
</template>

<style scoped>
.timeline-event {
  font-family: 'K2D', sans-serif;
  font-weight: 100;
  position: relative;
  min-width: 300px;
  margin: 0 100px;
  cursor: pointer;
}

.event-dot-container {
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16%;
}

.event-dot {
  width: 8px;
  height: 8px;
  background: #fff;
  border-radius: 50%;
}

.event-info {
  position: relative;
  text-align: left;
  /* margin-top: 5px; */
}

.event-date {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 4px;
  font-weight: 400;
}

.event-title {
  font-size: 20px;
  color: #fff;
  font-weight: 400;
}

.event-tooltip {
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(30, 30, 30, 0.95);
  padding: 20px;
  border-radius: 12px;
  width: 300px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  pointer-events: none;
}

.event-tooltip .event-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  font-size: 15px;
}

.timeline-event:hover .event-tooltip {
  opacity: 1;
  visibility: visible;
}

@media (max-width: 768px) {
  .timeline-event {
    min-width: 200px;
    margin: 0 50px;
  }

  .event-dot-container {
 
  margin-top: 24%;
}
}
</style>