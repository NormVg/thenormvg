<script setup>
defineProps({
  date: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="timeline-card">
    <div class="content">
      <div class="date">{{ date }}</div>
      <div class="description">{{ description }}</div>
    </div>
    <div class="dot"></div>
  </div>
</template>

<style scoped>
.timeline-card {
  font-family: 'K2D', sans-serif;
  font-weight: 100;
  position: relative;
  min-width: 300px;
  padding: 20px;
  margin: 0 50px;
  text-align: left;
  color: white;
}

.content {
  margin-left: -35px;
}

.date {
  font-size: 0.7rem;
  opacity: 0.7;
  margin-bottom: 5px;
}

.dot {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
}

.description {
  font-size: 1rem;
  margin-bottom: 60px;
}

@media (max-width: 768px) {
  .timeline-card {
    min-width: 250px;
    margin: 0 30px;
  }
}
</style>