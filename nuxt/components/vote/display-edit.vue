<script setup>
import { preDebounceAction } from "@/composables/utils";
import { inputDelay } from "@/consts";
import { useEventData } from "@/composables/event";
import { useVoteData } from "@/composables/vote";
import { useUser } from "@/composables/auth";

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

const isUser = useUser().value.userId;

const { eventData } = useEventData();
const { getVotesForPlace, getVotesForDate, pending, error, postVoteAPI } =
  useVoteData();

const userVote = computed(() => {
  return props.dateTimeId.length
    ? getVotesForDate(props.dateTimeId, false)
    : getVotesForPlace(props.placeId, false);
});

const exUserVote = computed(() => {
  return props.dateTimeId.length
    ? getVotesForDate(props.dateTimeId, true)
    : getVotesForPlace(props.placeId, true);
});

const isChecked = ref(userVote.value[0]?.vote);

const updateVoteAPI = async () => {
  postVoteAPI(eventData.value.id, props.placeId, props.dateTimeId, {
    ...toValue(userVote.value[0]),
    vote: isChecked.value,
  });

  if (error.value) isChecked.value = !isChecked.value;
};

const performUpdate = preDebounceAction(
  () => (pending.value = true),
  updateVoteAPI,
  inputDelay
);
</script>
<template>
  <div
    v-if="!props.isEdit"
    class="vote"
  >
    <input
      v-if="isUser"
      type="checkbox"
      class="checkbox"
      :disabled="pending"
      v-model="isChecked"
      @change="performUpdate"
    />

    <AvatarList :items="exUserVote" />

    <VoteProgressBar
      :is-edit="props.isEdit"
      :place-id="props.placeId"
      :date-time-id="props.dateTimeId"
    />
  </div>
</template>
