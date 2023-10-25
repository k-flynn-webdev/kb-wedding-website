<script lang="ts" setup>
definePageMeta({
  // middleware: ["protected"],
});
</script>

<template>
  <div class="top-navbar">
    <NuxtLink
      to="/"
      class="link"
      >Home
    </NuxtLink>
    <NuxtLink
      to="/rsvp"
      class="link"
      >RSVP
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
  </div>
</template>
