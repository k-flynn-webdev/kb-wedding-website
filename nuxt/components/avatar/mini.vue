<script setup>
import { stringToColor } from "@/util/colour";

const props = defineProps({
  userId: {
    type: String,
    default: "",
  },
});

const avatarStyle = computed(() => {
  return {
    backgroundColor: stringToColor(props.userId),
  };
});
</script>

<template>
  <div
    v-if="props.userId && props.userId.length"
    class="avatar small"
    :title="props.userId"
    :style="avatarStyle"
  >
    <p>
      {{ props.userId[0] }}
    </p>
    {{}}
  </div>
</template>
