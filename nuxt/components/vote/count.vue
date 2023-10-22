<script setup>
import { useVoteData } from "@/composables/vote";

const { totalVoteCount } = useVoteData();
</script>
<template>
  <div class="vote__counter">
    <p
      class="vote__counter-value"
      :title="`${totalVoteCount} Total Votes`"
    >
      {{ totalVoteCount }}
    </p>
  </div>
</template>
