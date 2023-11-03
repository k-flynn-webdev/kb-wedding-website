<script lang="ts" setup>
const props = defineProps({
  headings: {
    type: Array,
    default: () => [],
  },
  values: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <table class="ul-row">
    <tr
      class="ul-row"
      :key="idx"
      v-for="(item, idx) in headings"
    >
      <td class="ul-row-heading">{{ item }}</td>
      <td class="ul-row-data">{{ values[idx] }}</td>
    </tr>
  </table>
</template>
