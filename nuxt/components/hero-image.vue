<script lang="ts" setup>
import { randomIntFromInterval } from "@/helpers/math";

const randomNum = randomIntFromInterval(1, 17);
const randomImageName = `image-${randomNum < 10 ? "0" : ""}${randomNum}`;
</script>

<template>
  <div
    class="hero-image"
    :class="randomImageName"
  ></div>
</template>
