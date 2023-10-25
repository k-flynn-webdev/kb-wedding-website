<script lang="ts" setup>
definePageMeta({
  // middleware: ["protected"],
});

const stayingNight = ref(false);
const highChair = ref(false);
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

      <div class="form-control">
        <div class="section">
          <div
            class="tooltip"
            data-tip="Meal starts at 3:30PM, 7PM side buffet"
          >
            <p>Wedding Meal</p>
          </div>

          <label class="cursor-pointer label">
            <span class="">Chicken</span>
            <input
              type="checkbox"
              class="toggle toggle-success"
            />
          </label>

          <label class="cursor-pointer label">
            <span class="">Lamb</span>
            <input
              type="checkbox"
              class="toggle toggle-success"
            />
          </label>

          <label class="cursor-pointer label">
            <span class="">Vegetarian</span>
            <input
              type="checkbox"
              class="toggle toggle-success"
            />
          </label>

          <div
            class="tooltip mt-5"
            data-tip="A half adult size meal"
          >
            <label class="cursor-pointer label">
              <span class="">Kids Meal</span>
              <input
                type="checkbox"
                class="toggle toggle-success"
              />
            </label>
          </div>

          <div
            class="tooltip"
            data-tip="The venue has 7 high chairs available"
          >
            <label class="cursor-pointer label">
              <span class="">Require High Chair</span>
              <input
                type="checkbox"
                class="toggle toggle-success"
                v-model="highChair"
              />
            </label>
          </div>
        </div>

        <div class="section">
          <p>Accomodation</p>
          <div
            class="tooltip"
            data-tip="The venue has 33 rooms available"
          >
            <label class="cursor-pointer label">
              <span class="">Staying At Ravenswood</span>
              <input
                type="checkbox"
                class="toggle toggle-success"
                v-model="stayingNight"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bottom-nav">
    <NuxtLink to="/">
      <button class="btn rsvp">Home</button>
    </NuxtLink>
  </div>
</template>
