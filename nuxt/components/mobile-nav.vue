<script lang="ts" setup>
definePageMeta({
  // middleware: ["protected"],
});

const isOpen = ref(false);

const handleClick = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="mb">
    <button
      class="mobile-nav-button"
      @click="handleClick"
    >
      <div class="mobile-nav-icon shadow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          class="close"
          v-if="isOpen"
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z"
            fill="#e5c8c9"
          />
        </svg>

        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          class="open"
        >
          <path
            d="M4 18L20 18"
            stroke="#e5c8c9"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M4 12L20 12"
            stroke="#e5c8c9"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M4 6L20 6"
            stroke="#e5c8c9"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </button>

    <div
      class="mobile-nav-content shadow"
      :class="{ 'mobile-nav-content-display': isOpen }"
      @click="handleClick"
    >
      <NuxtLink
        to="/"
        class="link"
        >Home
      </NuxtLink>

      <NuxtLink
        to="https://photos.app.goo.gl/ViGee8sYC8vhJxkK7"
        class="link"
        >Photos
      </NuxtLink>

      <NuxtLink
        to="/getting-there"
        class="link"
        >Getting There
      </NuxtLink>

      <NuxtLink
        to="/accommodation"
        class="link"
        >Accommodation
      </NuxtLink>

      <NuxtLink
        to="/the-big-day"
        class="link"
        >The Big Day
      </NuxtLink>
    </div>
  </div>
</template>
