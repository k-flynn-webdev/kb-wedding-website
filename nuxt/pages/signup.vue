<script lang="ts" setup>
import { useUserAuth } from "@/composables/auth";

const { pending, error, userForm, signUpAPI } = useUserAuth();

const handleSubmit = async (e: Event) => {
  await signUpAPI();

  await navigateTo("/"); // profile page
};
</script>

<template>
  <AtomsCard>
    <template #title>
      <div>
        <h1>Sign Up</h1>
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
        Create
      </button>
    </form>

    <p class="error">{{ error }}</p>

    <template #actions>
      <NuxtLink to="/login">Sign in</NuxtLink>
    </template>
  </AtomsCard>
</template>
