<script lang="ts" setup>
definePageMeta({
  // middleware: ["protected"],
});

const DATA = [
  {
    firstName: "kevin",
    lastName: "flynn",
  },
];

const firstName = ref("");
const lastName = ref("");

const getDataAPI = (): string[] => {
  console.log(firstName.value + lastName.value);
  return [];
};

const handleSubmit = () => {
  console.log(firstName.value + lastName.value);
};
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
    <form @submit.prevent="handleSubmit">
      <div class="form-control">
        <input
          type="text"
          placeholder="First Name"
          class="input input-bordered input-primary w-full"
          v-model="firstName"
        />
        <input
          type="text"
          placeholder="Last Name"
          class="input input-bordered input-primary w-full"
          v-model="lastName"
        />
      </div>
      <button
        type="submit"
        class="btn btn-primary"
      >
        search
      </button>
    </form>
  </div>

  <div class="bottom-nav">
    <NuxtLink to="/">
      <button class="btn rsvp">Home</button>
    </NuxtLink>
  </div>
</template>
