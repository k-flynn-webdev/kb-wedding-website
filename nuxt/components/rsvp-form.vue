<script lang="ts" setup>

const props = defineProps({
  firstName: {
    type: String,
    default: ""
  },
  lastName: {
    type: String,
    default: ""
  }
})

const localState = ref({} as GuestState)

interface GuestState  {
  chicken: boolean;
  lamb: boolean;
  vegetarian: boolean;
  kidsMeal: boolean;
  highChair: boolean;
  stayingNight: boolean;
}





onMounted(() => {
  if (props.firstName || props.lastName) {
    // do API call
  }
}),
</script>

<template>
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
