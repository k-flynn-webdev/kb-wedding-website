<script lang="ts" setup>
definePageMeta({
  // middleware: ["protected"],
});
</script>

<template>
  <div class="hero-image"></div>

  <div class="wedding-hero">
    <div class="wedding-hero__heading">
      <div class="transform">
        <h1>RSVP</h1>
      </div>
    </div>
  </div>

  <NuxtLink to="/">
    <button class="btn rsvp">Home</button>
  </NuxtLink>
</template>
