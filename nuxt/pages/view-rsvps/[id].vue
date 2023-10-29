<script lang="ts" setup>
import JsonCSV from "vue-json-csv";

definePageMeta({
  // middleware: ["protected"],
});

const pending = ref(false);

const hasError = ref(null as any);

const guestsFound = ref([] as any);
const row_keys = ref([] as any);

const getDate = (input: Date) => {
  return new Date(input).toLocaleString();
};

const getHeaders = () => {
  return row_keys.value.length ? Object.keys(row_keys.value[0]) : [];
};

const getAllRVPS = async () => {
  pending.value = true;
  hasError.value = null;

  const { data, error } = await useFetch("/api/guests", {
    method: "GET",
    transform: (guestList) => {
      return guestList.map((item) => ({
        ...item,
        high_chair: !!item.high_chair,
        created_at: getDate(item.created_at),
        updated_at: getDate(item.updated_at),
      }));
    },
  });

  pending.value = false;
  if (error.value) hasError.value = error.value;

  guestsFound.value = data.value;
  row_keys.value = getHeaders();
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

  <JsonCSV
    class="btn"
    :data="guestsFound"
    :labels="getHeaders()"
  >
    Download CSV file
  </JsonCSV>

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
