<script lang="ts" setup>
import { useUserAuth } from "@/composables/auth";

const { pending, error, userForm, loginAPI } = useUserAuth();

const handleSubmit = async (e: Event) => {
  await loginAPI();

  await navigateTo("/"); // profile page
};
</script>

<template>
  <AtomsCard>
    <template #title>
      <div>
        <h1>Sign in</h1>
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
        v-model="userForm.email"
      />

      <input
        class="input input-bordered w-full"
        placeholder="password"
        type="password"
        name="password"
        id="password"
        v-model="userForm.password"
      />

      <button
        type="submit"
        class="btn btn-primary"
        :disabled="pending"
      >
        Login
      </button>
    </form>

    <p class="error">{{ error }}</p>

    <template #actions>
      <NuxtLink to="/password-reset">Reset password</NuxtLink>
      <NuxtLink to="/signup">Create an account</NuxtLink>
    </template>
  </AtomsCard>
</template>
