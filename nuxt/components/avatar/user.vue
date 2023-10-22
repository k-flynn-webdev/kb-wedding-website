<script setup>
import { stringToColor } from "@/util/colour";

const props = defineProps({
  user: {
    type: Object,
    default: () => {
      return {};
    },
  },
});

const avatarStyle = computed(() => {
  return {
    backgroundColor: stringToColor(props.user.userId, {
      h: 0,
      s: 30,
      l: 20,
    }),
  };
});
</script>

<template>
  <div
    class="avatar user large"
    :title="props.user.email"
    :style="avatarStyle"
  >
    <div class="avatar__content">
      <span class="avatar__content-name">{{ props.user.email }}</span>
    </div>
  </div>
</template>
