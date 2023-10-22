<script lang="ts" setup>
import { useUserAuth } from "@/composables/auth";

const { pending, error, userForm, resetPasswordAPI } = useUserAuth();

const handleSubmit = async (e: Event) => {
  await resetPasswordAPI();

  await navigateTo("/"); // profile page
};
</script>

<template>
  <AtomsCard>
    <template #title>
      <div>
        <h1>Reset Password</h1>
      </div>
    </template>

    <form
      class="inputs"
      @submit.prevent="handleSubmit"
    >
      <input
        type="text"
        class="input input-bordered w-full"
        placeholder="email"
        name="email"
        id="email"
        v-model="userForm.password"
      />

      <button
        type="submit"
        class="btn btn-primary"
        :disabled="pending"
      >
        Reset
      </button>
    </form>

    <p
      class="error"
      v-if="error"
    >
      {{ error }}
    </p>

    <!-- <p v-if="successMessage">{{ successMessage }}</p> -->

    <template #actions>
      <NuxtLink to="/login">Sign in</NuxtLink>
    </template>
  </AtomsCard>
</template>
