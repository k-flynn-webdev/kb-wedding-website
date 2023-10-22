<script setup>
import { preDebounceAction } from "@/composables/utils";
import { inputDelay } from "@/consts";
import { usePlaceData } from "@/composables/place";

const props = defineProps({
  isEdit: {
    type: Boolean,
    default: true,
  },
});

const { placeData, pending, patchPlaceAPI, deletePlaceAPI } = usePlaceData();

const performUpdate = preDebounceAction(
  () => (pending.value = true),
  patchPlaceAPI,
  inputDelay
);
</script>
<template>
  <div class="place">
    <ul
      v-if="placeData"
      class="place__list"
    >
      <template
        v-for="(place, idx) in placeData"
        :key="idx"
      >
        <li
          v-if="props.isEdit"
          class="place__item"
        >
          <AtomsCard>
            <div class="place__form">
              <input
                type="text"
                maxlength="30"
                placeholder="place name"
                class="input input-bordered w-full"
                v-model="place.name"
                @input="performUpdate(place, 'name')"
              />

              <input
                type="text"
                maxlength="150"
                placeholder="place link"
                class="input input-bordered w-full"
                v-model="place.link"
                @input="performUpdate(place, 'link')"
              />

              <DateTimeDisplayEdit
                is-edit
                :place="place"
              />
            </div>

            <template #actions>
              <button
                class="btn action"
                @click="deletePlaceAPI(place.id)"
              >
                Delete Place
              </button>
            </template>
          </AtomsCard>
        </li>
        <li
          v-else
          class="place__item"
        >
          <AtomsCard class="card-compact">
            <template #title>{{ place.name }}</template>

            <a
              class="link"
              :href="place.link"
              >{{ place.link }}</a
            >

            <template #actions>
              <DateTimeDisplayEdit
                :is-edit="false"
                :place="place"
              />
            </template>
          </AtomsCard>
        </li>
      </template>
    </ul>

    <PlaceAdd
      v-if="props.isEdit"
      class="add"
    />
  </div>
</template>
