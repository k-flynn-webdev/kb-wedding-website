<script lang="ts" setup>
const props = defineProps({
  guest: {
    type: Object,
    required: true,
  },
});

const localState = ref({} as GuestState);
const hasError = ref(null as any);

interface GuestState {
  id?: string;
  chicken: boolean;
  lamb: boolean;
  vegetarian: boolean;
  kidsMeal: boolean;
  highChair: boolean;
  stayingNight: boolean;
}

const handleSubmit = async () => {
  const { data, error } = await useFetch("/api/guests", {
    method: "POST",
    body: {},
  });

  if (error.value) hasError.value = error.value;
};
</script>

<template>
  <div class="form-control mt-5">
    <p class="error">{{ hasError }}</p>

    <h3 class="mb-3">
      {{ props.guest.first_name }} {{ props.guest.last_name }}
    </h3>

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
          v-model="localState.chicken"
        />
      </label>

      <label class="cursor-pointer label">
        <span class="">Lamb</span>
        <input
          type="checkbox"
          class="toggle toggle-success"
          v-model="localState.lamb"
        />
      </label>

      <label class="cursor-pointer label">
        <span class="">Vegetarian</span>
        <input
          type="checkbox"
          class="toggle toggle-success"
          v-model="localState.vegetarian"
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
            v-model="localState.kidsMeal"
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
            v-model="localState.highChair"
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
            v-model="localState.stayingNight"
          />
        </label>
      </div>
    </div>
  </div>
</template>
