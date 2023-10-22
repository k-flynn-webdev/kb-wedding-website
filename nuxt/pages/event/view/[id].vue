<script setup>
import { useEventData } from "@/composables/event";
import { useInitEvent } from "@/composables/events-init";

definePageMeta({
  // middleware: ["protected"],
});

useInitEvent();

const { pending, eventData } = useEventData();

const editEvent = async () => {
  navigateTo(`/event/edit/${eventData.value.id}`);
};
</script>

<template>
  <div>
    <EventDisplayEdit
      :is-edit="false"
      class="view"
    />

    <button
      class="btn btn-primary"
      :disabled="pending ? 'disabled' : null"
      @click="editEvent"
    >
      Edit
    </button>
  </div>
</template>
