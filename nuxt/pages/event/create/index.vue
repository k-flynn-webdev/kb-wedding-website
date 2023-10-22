<script setup>
import { useEventData } from "@/composables/event";
import { useInitEvent } from "@/composables/events-init";
import { useClearEvent } from "@/composables/events-clear";

definePageMeta({
  // middleware: ["protected"],
});

useInitEvent();
useClearEvent();

const { pending, eventData, deleteEventAPI } = useEventData();

const deleteEvent = async () => {
  await deleteEventAPI(eventData.value.id);
  navigateTo("/");
};

const viewEvent = async () => {
  navigateTo(`/event/view/${eventData.value.id}`);
};
</script>

<template>
  <div>
    <h2>Create an Event</h2>

    <EventDisplayEdit
      is-edit
      class="edit"
    />

    <button
      class="btn"
      :disabled="pending ? 'disabled' : null"
      @click="deleteEvent"
    >
      Cancel
    </button>

    <button
      class="btn btn-primary"
      :disabled="pending ? 'disabled' : null"
      @click="viewEvent"
    >
      Next
    </button>
  </div>
</template>
