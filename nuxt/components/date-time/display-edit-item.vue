<script setup>
import { preDebounceAction } from "@/composables/utils";
import { inputDelay } from "@/consts";
import { useDateTimeData } from "@/composables/date-time";

const props = defineProps({
  isEdit: {
    type: Boolean,
    default: true,
  },
  eventId: {
    type: String,
    required: true,
  },
  placeId: {
    type: String,
    required: true,
  },
  dateItem: {
    type: Object,
    required: true,
  },
});

const {
  dateTimeData,
  pending,
  displayDateTime,
  createDateTimeAPI,
  patchDateTimeAPI,
  deleteDateTimeAPI,
} = useDateTimeData();

const performUpdate = preDebounceAction(
  () => (pending.value = true),
  patchDateTimeAPI,
  inputDelay
);
</script>
<template>
  <div class="date-time">
    <template v-if="props.isEdit">
      <input
        type="datetime-local"
        placeholder="date time"
        class="input input-bordered"
        v-model="dateItem.date_time"
        @input="performUpdate(dateItem, 'date_time')"
      />

      <button
        class="btn action"
        @click="deleteDateTimeAPI(dateItem)"
      >
        Delete Date
      </button>
    </template>

    <template v-else>
      <div v-if="dateItem.date_time">
        <p :title="displayDateTime(dateItem)">
          {{ displayDateTime(dateItem) }}
        </p>

        <VoteDisplayEdit
          :is-edit="props.isEdit"
          :place-id="props.placeId"
          :date-time-id="dateItem.id"
        />
      </div>

      <VoteDisplayEdit
        v-else
        :is-edit="props.isEdit"
        :place-id="props.placeId"
      />
    </template>
  </div>
</template>
