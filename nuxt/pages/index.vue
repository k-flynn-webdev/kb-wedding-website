<script lang="ts" setup>
definePageMeta({
  // middleware: ["protected"],
});
</script>

<template>
  <div class="wedding-hero">
    <div class="wedding-hero__heading">
      <div class="transform">
        <h1>Kevin</h1>
        <p class="sans">AND</p>
        <h1 class="pb-10">Belinda</h1>
      </div>
    </div>
  </div>

  <p class="wedding-strapline uppercase">We're getting married!</p>

  <div class="wedding-date uppercase">
    <div class="row">
      <div class="col side">
        <p class="day lg">Sunday</p>
        <p class="day mb">Sun</p>
      </div>
      <div class="col">
        <p class="month lg">February</p>
        <p class="month mb">Feb</p>
        <p class="date">0 4</p>
        <p class="year">2024</p>
      </div>
      <div class="col side">
        <p class="time lg">At 1pm</p>
        <p class="time mb">1pm</p>
      </div>
    </div>
  </div>

  <div class="wedding-location">
    <NuxtLink
      target="_blank"
      class="link"
      to="https://maps.app.goo.gl/hoVmCuADSdGsg4fh9"
    >
      The Ravenswood
    </NuxtLink>
    <p>
      Cinder Hill, Sharpthorne, West Sussex,
      <span class="postcode">RH19 4HY</span>
    </p>
  </div>

  <div class="bottom-nav">
    <NuxtLink
      to="https://photos.app.goo.gl/ViGee8sYC8vhJxkK7"
      target="_blank"
    >
      <button class="btn rsvp">Photos</button>
    </NuxtLink>
  </div>
</template>
