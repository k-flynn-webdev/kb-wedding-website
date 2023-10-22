<script setup>
import { preDebounceAction } from "@/composables/utils";
import { inputDelay } from "@/consts";
import { useDateTimeData } from "@/composables/date-time";

const props = defineProps({
  isEdit: {
    type: Boolean,
    default: true,
  },
  place: {
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
      <ul class="date-time__list">
        <li
          class="date-time__form"
          v-for="(dateItem, idx) in dateTimeData[props.place.id]"
          :key="idx"
        >
          <!-- todo split this out -->
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
        </li>
      </ul>
    </template>

    <template v-else>
      <ul
        class="date-time__list"
        v-if="dateTimeData[props.place.id]?.length"
      >
        <!-- todo split this out -->
        <li
          class="date-time__item"
          v-for="(dateItem, idx) in dateTimeData[props.place.id]"
          :key="idx"
        >
          <div v-if="dateItem.date_time">
            <p :title="displayDateTime(dateItem)">
              {{ displayDateTime(dateItem) }}
            </p>

            <VoteDisplayEdit
              :is-edit="props.isEdit"
              :place-id="props.place.id"
              :date-time-id="dateItem.id"
            />
          </div>
        </li>
      </ul>

      <VoteDisplayEdit
        v-else
        :is-edit="props.isEdit"
        :place-id="props.place.id"
      />
    </template>

    <!-- todo : split this out -->
    <button
      v-if="props.isEdit"
      class="btn"
      @click="createDateTimeAPI(props.place.event_id, props.place.id)"
    >
      Add a Date
    </button>
  </div>
</template>
