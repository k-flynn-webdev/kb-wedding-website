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
    :class="[randomImageName, { dark: route?.name !== 'index' }]"
  ></div>
</template>
