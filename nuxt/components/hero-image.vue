<script lang="ts" setup>
function randomIntFromInterval(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const backgroundImg = ref(`image-0${randomIntFromInterval(1, 9)}`);
</script>

<template>
  <div
    class="hero-image"
    :class="backgroundImg"
  ></div>
</template>
