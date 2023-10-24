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

  <div class="container">
    <input
      type="text"
      placeholder="First Name"
      class="input input-bordered input-primary w-full"
    />
    <input
      type="text"
      placeholder="Last Name"
      class="input input-bordered input-primary w-full"
    />
  </div>

  <div class="bottom-nav">
    <NuxtLink to="/">
      <button class="btn rsvp">Home</button>
    </NuxtLink>
  </div>
</template>
