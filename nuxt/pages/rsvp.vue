<script lang="ts" setup>
definePageMeta({
  // middleware: ["protected"],
});

const firstName = ref("");
const lastName = ref("");

const pending = ref(false);
const hasError = ref(null as any);

const guestsFound = ref([]);

const handleSubmit = async () => {
  pending.value = true;
  hasError.value = null;

  const { data, error } = await useFetch("/api/guests", {
    method: "POST",
    body: {
      first_name: firstName.value,
      last_name: lastName.value,
    },
    transform: (guestList) => {
      return guestList.map((item) => ({
        ...item,
        high_chair: !!item.high_chair,
      }));
    },
  });

  pending.value = false;
  if (error.value) hasError.value = error.value;

  guestsFound.value = data.value;
};
</script>

<template>
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
        :disabled="pending"
      >
        search
      </button>

      <p class="error">{{ hasError }}</p>
    </form>
  </div>

  <div
    v-if="guestsFound && guestsFound.length"
    class="mt-5"
  >
    <RsvpForm
      v-for="guest in guestsFound"
      :guest="guest"
    />
  </div>

  <div class="bottom-nav">
    <NuxtLink to="/">
      <button class="btn rsvp">Home</button>
    </NuxtLink>
  </div>
</template>
