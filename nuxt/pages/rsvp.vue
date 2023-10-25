<script lang="ts" setup>
definePageMeta({
  // middleware: ["protected"],
});
</script>

<template>
  <HeroImage />

  <div class="wedding-hero">
    <div class="wedding-hero__heading">
      <div class="transform">
        <h1>RSVP</h1>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="form-control">
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

      <div class="form-control w-52">
        <label class="cursor-pointer label">
          <span class="label-text">Remember me</span>
          <input
            type="checkbox"
            class="toggle toggle-primary"
            checked
          />
        </label>
      </div>
    </div>
  </div>

  <div class="bottom-nav">
    <NuxtLink to="/">
      <button class="btn rsvp">Home</button>
    </NuxtLink>
  </div>
</template>
