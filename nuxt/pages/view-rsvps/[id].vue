<script lang="ts" setup>
import JsonCSV from "vue-json-csv";
import { useRoute } from "#vue-router";
import { type GuestData } from "@/interfaces";

definePageMeta({
  // middleware: ["protected"],
});

const route = useRoute();

const pending = ref(false);

const hasError = ref(null as any);

const guestsFound = ref([] as GuestData[]);

const getDate = (input: Date) => {
  return new Date(input).toLocaleString();
};

const tableLabels = [
  "updated_at",
  "first_name",
  "last_name",
  "attending",
  "meal",
  "accomodation",
  "high_chair",
  "note",
  "id",
];

const getAllRVPS = async () => {
  pending.value = true;
  hasError.value = null;

  const { data, error } = await useFetch(`/api/guests/${route?.params?.id}`, {
    method: "GET",
  });

  pending.value = false;

  if (error.value) hasError.value = error.value;

  guestsFound.value = data.value?.sort(function (a, b) {
    return b.updated_at - a.updated_at;
  });
};

const displayItemData = (item: any, label: string) => {
  if (["created_at", "updated_at"].includes(label)) {
    return getDate(item[label]);
  }

  if (["attending", "high_chair"].includes(label)) {
    return !!item[label];
  }

  return item[label];
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
    :labels="tableLabels"
  >
    Download CSV file
  </JsonCSV>

  <div class="view-rsvps-table">
    <table
      v-if="guestsFound && guestsFound.length"
      class="mt-5"
    >
      <tr>
        <th
          :key="head"
          :class="head"
          v-for="head in tableLabels"
        >
          {{ head }}
        </th>
      </tr>

      <template v-for="guest in guestsFound">
        <tr>
          <td
            :key="label"
            v-for="label in tableLabels"
          >
            {{ displayItemData(guest, label) }}
          </td>
        </tr>
      </template>
    </table>
  </div>
</template>
