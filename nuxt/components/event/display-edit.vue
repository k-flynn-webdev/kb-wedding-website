<script setup>
import { useEventData } from "@/composables/event";

import { preDebounceAction } from "@/composables/utils";
import { inputDelay } from "@/consts";

const props = defineProps({
  isEdit: {
    type: Boolean,
    default: true,
  },
});

const { pending, error, eventData, patchEventAPI } = useEventData();

const performUpdate = preDebounceAction(
  () => (pending.value = true),
  patchEventAPI,
  inputDelay
);
</script>

<template>
  <div class="event">
    <div
      v-if="props.isEdit"
      class="event__item"
    >
      <AtomsCard>
        <div class="event__form">
          <input
            type="text"
            maxlength="30"
            placeholder="event name"
            class="textarea input-bordered w-full name"
            v-model="eventData.name"
            @input="performUpdate(eventData.id, 'name')"
          />

          <br />

          <textarea
            maxlength="100"
            placeholder="event description"
            class="textarea input-bordered w-full description"
            v-model="eventData.description"
            @input="performUpdate(eventData.id, 'description')"
          />
        </div>
      </AtomsCard>
    </div>

    <AtomsCard
      v-else
      class="event__item hide-actions"
    >
      <template #title>
        <div>
          <h2>{{ eventData.name }}</h2>
          <p>{{ eventData.description }}</p>
        </div>
      </template>

      <VoteCount />
    </AtomsCard>

    <PlaceDisplayEdit :is-edit="props.isEdit" />
  </div>
</template>
