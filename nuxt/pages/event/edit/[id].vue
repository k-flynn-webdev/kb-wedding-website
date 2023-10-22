<script setup>
import { useEventData } from "@/composables/event";
import { useInitEvent } from "@/composables/events-init";

definePageMeta({
  // middleware: ["protected"],
});

useInitEvent();

const { pending, eventData } = useEventData();

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
    <EventDisplayEdit
      is-edit
      class="edit"
    />

    <button
      class="btn"
      :disabled="pending ? 'disabled' : null"
      @click="deleteEvent"
    >
      Delete
    </button>

    <button
      class="btn btn-primary"
      :disabled="pending ? 'disabled' : null"
      @click="viewEvent"
    >
      View
    </button>
  </div>
</template>
