<script lang="ts" setup>
import { useRoute, useRouter } from "#vue-router";
import { transformGuestAPI } from "@/helpers/transforms";
import { type GuestData } from "@/interfaces";

definePageMeta({
  // middleware: ["protected"],
});

const route = useRoute();
const router = useRouter();

const firstName = ref(route?.query?.firstName || "");
const lastName = ref(route?.query?.lastName || "");

const pending = ref(false);
const noResults = ref(false);
const showRelated = ref(false);
const hasError = ref(null as any);

const personData = ref({} as GuestData[]);
const relatedData = ref([] as GuestData[]);

watch(firstName, (firstName) => {
  router.push({
    path: "/rsvp",
    query: { ...route?.query, firstName },
  });
});

watch(lastName, (lastName) => {
  router.push({
    path: "/rsvp",
    query: { ...route?.query, lastName },
  });
});

const handleSubmit = async () => {
  pending.value = true;
  hasError.value = null;
  noResults.value = false;

  const { data, error } = await useFetch("/api/guests", {
    method: "POST",
    body: {
      first_name: firstName.value,
      last_name: lastName.value,
    },
    transform: transformGuestAPI,
  });

  pending.value = false;
  if (error.value) hasError.value = error.value;

  if (data?.value?.length) {
    personData.value = data.value[0];
    relatedData.value = data.value.slice(1);
  }

  if (
    !error.value &&
    !data.value?.length &&
    firstName.value &&
    lastName.value
  ) {
    noResults.value = true;
  }
};

if (route?.query?.firstName && route?.query?.lastName) await handleSubmit();
</script>

<template>
  <div class="wedding-hero">
    <div class="wedding-hero__heading extra">
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

      <div class="row search">
        <button
          type="submit"
          class="btn btn-primary"
          :disabled="pending"
        >
          search
        </button>

        <div class="form-control max-w-50">
          <label class="cursor-pointer label">
            <span class="mr-2">Show related</span>
            <input
              type="checkbox"
              class="checkbox checkbox-info"
              v-model="showRelated"
            />
          </label>
        </div>
      </div>

      <p
        class="error"
        v-if="hasError"
      >
        Type a first and last name of at least 3 characters
      </p>

      <p
        class="error"
        v-if="noResults"
      >
        No guests found
      </p>
    </form>
  </div>

  <div class="mt-5">
    <RsvpForm
      v-if="personData"
      :guest="personData"
    />

    <RsvpForm
      v-if="showRelated && relatedData.length"
      v-for="guest in relatedData"
      :guest="guest"
    />
  </div>
</template>
