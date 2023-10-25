<script lang="ts" setup>
const props = defineProps({
  guest: {
    type: Object,
    required: true,
  },
});

const hasError = ref(null as any);

interface GuestState {
  id?: string;
  meal: string;
  is_kid: boolean;
  kids_meal: boolean;
  high_chair: boolean;
  accomodation: string;
  note: string;
}

const handleSubmit = async () => {
  const { data, error } = await useFetch(`/api/guests/${props.guest.id}`, {
    method: "PATCH",
    body: { ...props.guest },
    transform: (guestList) => {
      return guestList.map((item) => ({
        ...item,
        high_chair: !!item.high_chair,
        kids_meal: !!item.kids_meal,
      }));
    },
  });

  if (error.value) hasError.value = error.value;
};
</script>

<template>
  <div class="form-control mt-5">
    <p class="error">{{ hasError }}</p>

    <h3 class="mb-5 guest-name">
      {{ props.guest.first_name }} {{ props.guest.last_name }}
    </h3>

    <div class="section">
      <div
        class="tooltip"
        data-tip="Meal starts at 3:30PM, 7PM side buffet"
      >
        <div class="row">
          <p class="col">Wedding Meal</p>

          <select
            class="select col"
            v-model="props.guest.meal"
            @change="handleSubmit"
          >
            <option
              disabled
              selected
            >
              Pick your preferred meal
            </option>
            <option value="chicken">Chicken</option>
            <option value="lamb">Lamb</option>
            <option value="vegetarian">Vegetarian</option>
          </select>
        </div>
      </div>

      <div
        class="tooltip mt-5"
        data-tip="A half adult size meal"
      >
        <label class="cursor-pointer label">
          <span class="">Kids Meal</span>
          <input
            type="checkbox"
            class="toggle toggle-success"
            v-model="props.guest.kids_meal"
            @change="handleSubmit"
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
            v-model="props.guest.high_chair"
            @change="handleSubmit"
          />
        </label>
      </div>
    </div>

    <div class="section">
      <div
        class="tooltip"
        data-tip="The venue has 33 rooms available"
      >
        <div class="row">
          <p class="col">Accomodation</p>

          <select
            class="select col"
            v-model="guest.accomodation"
            @change="handleSubmit"
          >
            <option
              disabled
              selected
            >
              Staying or Leaving early?
            </option>
            <option value="no">Not staying</option>
            <option value="ravenswood">Staying Ravenswood</option>
            <option value="other">Staying Another Hotel</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>
