<script lang="ts" setup>
definePageMeta({
  // middleware: ["protected"],
});

const pending = ref(false);

const hasError = ref(null as any);

const guestsFound = ref([] as any);
const row_keys = ref([] as any);

const getAllRVPS = async () => {
  pending.value = true;
  hasError.value = null;

  const { data, error } = await useFetch("/api/guests", {
    method: "GET",
    transform: (guestList) => {
      return guestList.map((item) => ({
        ...item,
        high_chair: !!item.high_chair,
      }));
    },
  });

  pending.value = false;
  if (error.value) hasError.value = error.value;

  if (data.value?.length > 0) {
    row_keys.value = Object.keys(data.value[0]);
  }

  guestsFound.value = data.value;
};

onBeforeMount(async () => {
  await nextTick();
  await getAllRVPS();
});
</script>

<template>
  <div class="wedding-hero">
    <div class="wedding-hero__heading extra">
      <div class="transform">
        <h1>ALL RSVPs</h1>
      </div>
    </div>
  </div>

  <div class="table-holder">
    <table
      v-if="guestsFound && guestsFound.length"
      class="mt-5"
    >
      <tr>
        <th
          :key="head"
          :class="head"
          v-for="head in row_keys"
        >
          {{ head }}
        </th>
      </tr>
      <template v-for="guest in guestsFound">
        <tr>
          <td
            :key="idx"
            v-for="(data, idx) in guest"
          >
            {{ data }}
          </td>
        </tr>
      </template>
    </table>
  </div>
</template>
