<script lang="ts" setup>
import { useRoute } from "#vue-router";
import { randomIntFromInterval } from "@/helpers/math";

const route = useRoute();
const randomNum = randomIntFromInterval(1, 17);

const randomImageName = `image-${randomNum < 10 ? "0" : ""}${randomNum}`;
</script>

<template>
  <div
    class="hero-image"
    :class="[{ dark: route?.name !== 'index' }]"
  >
    <div
      class="hero-image-content"
      :class="randomImageName"
    ></div>
  </div>
</template>
