<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => {
      return [];
    },
  },
});
</script>

<template>
  <div class="voters">
    <template v-for="(item, idx) in items">
      <AvatarMini :user-id="item.user_id" />
    </template>
  </div>
</template>

<style lang="scss">
.voters {
  display: inline-block;
}
</style>
