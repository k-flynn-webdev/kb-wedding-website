<script lang="ts" setup>
definePageMeta({
  // middleware: ["protected"],
});
</script>

<template>
  <div class="lg">
    <div class="top-navbar">
      <NuxtLink
        to="/"
        class="link"
        >Home
      </NuxtLink>

      <NuxtLink
        to="https://photos.app.goo.gl/ViGee8sYC8vhJxkK7"
        class="link"
        >Photos
      </NuxtLink>

      <NuxtLink
        to="/getting-there"
        class="link lg"
        >Getting There
      </NuxtLink>
      <NuxtLink
        to="/getting-there"
        class="link mb"
        >Directions
      </NuxtLink>

      <NuxtLink
        to="/accommodation"
        class="link"
        >Accommodation
      </NuxtLink>

      <NuxtLink
        to="/the-big-day"
        class="link"
        >The Big Day
      </NuxtLink>
    </div>
  </div>
</template>
