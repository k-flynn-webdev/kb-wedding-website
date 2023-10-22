<script setup>
import { useEventData } from "@/composables/event";
import { usePlaceData } from "@/composables/place";

const { eventData } = useEventData();
const { pending, createPlaceAPI } = usePlaceData();
</script>

<template>
  <div class="add-place">
    <button
      class="btn"
      :disabled="pending ? 'disabled' : null"
      @click="createPlaceAPI(eventData.id)"
    >
      Add a Place?
      <span
        v-if="pending"
        class="loading loading-ring loading-sm"
      ></span>
    </button>
  </div>
</template>
