<script lang="ts" setup>
import { preDebounceAction } from "@/composables/utils";
import { inputDelay } from "@/consts";
import { transformGuestAPI } from "@/helpers/transforms";
import { type GuestData } from "@/interfaces";

const props = defineProps({
  guest: {
    type: Object,
    required: true,
  },
});

const pending = ref(false);
const hasError = ref(null as any);

const handleSubmit = async () => {
  pending.value = true;
  hasError.value = null;

  const { data, error } = await useFetch(`/api/guests/${props.guest.id}`, {
    method: "PATCH",
    body: { ...props.guest },
    transform: transformGuestAPI,
  });

  pending.value = false;
  if (error.value) hasError.value = error.value;
};

const performUpdate = preDebounceAction(
  () => (pending.value = true),
  handleSubmit,
  inputDelay
);
</script>

<template>
  <div class="form-control mt-5 max-30">
    <p
      v-if="hasError?.length"
      class="error"
    >
      {{ hasError }}
    </p>

    <h3 class="mb-2 text-left">
      {{ props.guest.first_name }} {{ props.guest.last_name }}
    </h3>

    <div class="section1">
      <label class="cursor-pointer label row p-0 mb-4">
        <span>Attending?</span>

        <span class="grow text-right mr-1">
          {{
            props.guest.attending
              ? "Yes, love to be there"
              : "No I cant make it"
          }}
        </span>
        <input
          type="checkbox"
          class="toggle toggle-success"
          v-model="props.guest.attending"
          @change="handleSubmit"
        />
      </label>

      <div v-if="props.guest.attending">
        <div
          class="tooltip tooltip-info row items-center mb-4"
          data-tip="Meal starts at 3:30PM, 8:30PM side buffet"
        >
          <p class="col text-left">Preferred Meal</p>

          <select
            class="select col mb-0"
            v-model="props.guest.meal"
            @change="handleSubmit"
          >
            <option
              value=""
              disabled
              selected
            >
              Please select
            </option>
            <option value="chicken">Chicken</option>
            <option value="salmon">Salmon</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="kids_meal">Kids</option>
            <option value="no">No meal</option>
          </select>
        </div>

        <div
          class="tooltip tooltip-info mb-4"
          data-tip="The venue has 7 high chairs available"
        >
          <label class="cursor-pointer label row p-0 mb-4">
            <span class="">Require High Chair</span>
            <span class="grow text-right mr-1">
              {{ props.guest.high_chair ? "Yes" : "No" }}
            </span>
            <input
              type="checkbox"
              class="toggle toggle-success"
              v-model="props.guest.high_chair"
              @change="handleSubmit"
            />
          </label>
        </div>

        <div class="row">
          <textarea
            class="textarea w-full"
            placeholder="Dietary Requirements"
            v-model="guest.note"
            @input="performUpdate"
          ></textarea>
        </div>

        <div
          class="tooltip tooltip-info row items-center mb-4"
          data-tip="The venue has 33 rooms available"
        >
          <p class="col text-left">Staying the night?</p>

          <select
            class="select col mb-0"
            v-model="guest.accomodation"
            @change="handleSubmit"
          >
            <option
              value=""
              disabled
              selected
            >
              Please select
            </option>
            <option value="no">Not staying</option>
            <option value="ravenswood">Staying Ravenswood</option>
            <option value="other">Staying Another Hotel</option>
            <option value="undecided">Undecided</option>
          </select>
        </div>
      </div>

      <div
        v-else
        class="row"
      >
        <textarea
          class="textarea w-full"
          placeholder="A note for the couple"
          v-model="guest.note"
          @input="performUpdate"
        ></textarea>
      </div>
    </div>
  </div>
</template>
