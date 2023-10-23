<script setup>
const props = defineProps({
  heading: {
    type: String,
    defaukt: "",
  },
  subheading: {
    type: String,
    defaukt: "",
  },
});
</script>

<template>
  <div class="info">
    <h4>
      <strong>{{ props.heading }}</strong>
    </h4>
    <h5>
      <strong>{{ props.subheading }}</strong>
    </h5>

    <div class="info-content">
      <slot></slot>
    </div>
  </div>
</template>
