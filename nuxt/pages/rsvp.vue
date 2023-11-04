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
const showRelated = ref(true);
const hasError = ref(null as any);
const message = ref("" as string);
const userHasSaved = ref(false);

const personData = ref([] as GuestData[]);
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

const displayMessage = async () => {
  message.value = "Thank you so much for responding.";

  await setTimeout(() => {
    message.value = "";
    userHasSaved.value = false;
  }, 1700);
};

const handleSave = async () => {
  userHasSaved.value = true;
  displayMessage();
};

const handleSubmit = async () => {
  pending.value = true;
  hasError.value = null;
  noResults.value = false;
  personData.value = [] as GuestData[];
  relatedData.value = [] as GuestData[];

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
    personData.value = data.value.slice(0, 1);
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

  <div class="max-35 mt-10">
    <p class="mb-2">Let us know if you can celebrate with us on the day :)</p>
    <p class="mb-2">
      We have yet to decide on the main wedding meal but please let us know any
      preferences, allergies and any other dietary requirements.
    </p>
    <p class="mb-2">
      If you are planning to stay overnight at the venue, we'll also keep an eye
      out on the booking, as special requests cannot be made directly on the
      website.
    </p>
    <br />
  </div>

  <div class="max-35">
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

      <div class="row show-related-form">
        <button
          type="submit"
          class="btn btn-primary"
          :disabled="pending"
        >
          search
        </button>

        <label class="cursor-pointer label">
          <span class="mr-2">Show related</span>
          <input
            type="checkbox"
            class="checkbox checkbox-info"
            v-model="showRelated"
          />
        </label>
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
      v-if="personData.length"
      :guest="personData[0]"
      :save="userHasSaved"
    />

    <RsvpForm
      v-if="showRelated && relatedData.length"
      v-for="guest in relatedData"
      :guest="guest"
      :save="userHasSaved"
    />

    <div
      class="mt-10"
      v-if="personData.length"
    >
      <button
        class="btn btn-success save mb-10"
        @click="handleSave"
      >
        <strong>Save</strong>
      </button>
    </div>

    <div v-if="message.length">
      <p>
        <strong>{{ message }}</strong>
      </p>
    </div>
  </div>
</template>
