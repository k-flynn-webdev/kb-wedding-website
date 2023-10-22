<script lang="ts" setup>
definePageMeta({
  middleware: ["protected"],
});

import { useUserAuth, useAuthenticatedUser } from "@/composables/auth";

const user = useAuthenticatedUser();

const { pending, error, signOutAPI } = useUserAuth();

const handleSubmit = async (e: Event) => {
  await signOutAPI();

  await navigateTo("/login");
};
</script>

<template>
  <AtomsCard>
    <template #title>
      <div>
        <h1>Profile</h1>
      </div>
    </template>

    <p>User id: {{ user.userId }}</p>
    <p>Email: {{ user.email }}</p>

    <template #actions>
      <button
        type="submit"
        class="btn btn-primary"
        :disabled="pending"
        @click="handleSubmit"
      >
        Sign Out
      </button>
    </template>
  </AtomsCard>
</template>
