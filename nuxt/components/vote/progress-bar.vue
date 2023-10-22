<script setup>
import { useVoteData } from "@/composables/vote";

const props = defineProps({
  isEdit: {
    type: Boolean,
    default: true,
  },
  placeId: {
    type: String,
    required: true,
  },
  dateTimeId: {
    type: String,
    default: "",
  },
});

const { placeDateVoteRatio } = useVoteData();

const voteRatio = placeDateVoteRatio(props.placeId, props.dateTimeId);
</script>
<template>
  <progress
    class="progress w-100"
    :value="voteRatio"
  ></progress>
</template>
