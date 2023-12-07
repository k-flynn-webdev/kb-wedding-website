<script lang="ts" setup>
import JsonCSV from "vue-json-csv";
import { useRoute } from "#vue-router";

// EXAMPLE ADMIN PAGE
const dataLabels = ["created_at", "updated_at", "id"];

definePageMeta({
  // middleware: ["protected"],
});

const route = useRoute();

const isPending = ref(false);
const isError = ref(null as any);
const dataTable = ref(null as any);

// local db columns

const getApiData = async () => {
  const { data, error } = await callDbAction("data");

  console.log(data.value);

  dataTable.value = data.value?.sort(function (a, b) {
    return b.updated_at - a.updated_at;
  });
};

const callDbAction = async (action: string) => {
  isPending.value = true;
  isError.value = null;

  const { data, error } = await useFetch(
    `/api/admin/${route?.params?.user}/${route.params?.password}/${action}`,
    {
      method: "GET",
    }
  );

  isPending.value = false;

  if (error.value) isError.value = error.value;

  return { data, error };
};

const getLocalDate = (input: Date) => {
  return new Date(input).toLocaleString();
};

onBeforeMount(async () => {
  await nextTick();
  await getApiData();
});
</script>

<template>
  <div class="transform">
    <h1>ALL DATA</h1>
  </div>

  <div class="buttons">
    <JsonCSV
      class="btn"
      :data="dataTable"
      :labels="dataLabels"
    >
      Download CSV file
    </JsonCSV>

    <button
      class="btn"
      @click="callDbAction('backup')"
    >
      Backup
    </button>

    <button
      class="btn"
      disabled
      @click="callDbAction('checkpoint')"
    >
      Checkpoint
    </button>
  </div>

  <div class="view-rsvps-table">
    <table
      v-if="dataTable && dataTable.length"
      class="mt-5"
    >
      <tr>
        <th
          :key="head"
          :class="head"
          v-for="head in dataLabels"
        >
          {{ head }}
        </th>
      </tr>

      <template v-for="row in dataTable">
        <tr>
          <td
            :key="label"
            v-for="label in dataLabels"
          >
            {{
              ["created_at", "updated_at"].includes(label)
                ? getLocalDate(row[label])
                : row[label]
            }}
          </td>
        </tr>
      </template>
    </table>
  </div>
</template>
