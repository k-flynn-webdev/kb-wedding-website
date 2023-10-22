<script setup>
import { useDateTimeData } from "@/composables/date-time";

const props = defineProps({
  eventId: {
    type: String,
    required: true,
  },
  placeId: {
    type: String,
    required: true,
  },
});

const { pending, createDateTimeAPI } = useDateTimeData();
</script>

<template>
  <div class="add-time">
    <button
      class="btn"
      :disabled="pending ? 'disabled' : null"
      @click="createDateTimeAPI(eventId, placeId)"
    >
      Add a Date Time
      <span
        v-if="pending"
        class="loading loading-ring loading-sm"
      ></span>
    </button>
  </div>
</template>

<style lang="scss"></style>
