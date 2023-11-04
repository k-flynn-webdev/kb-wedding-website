<script lang="ts" setup>
definePageMeta({
  // middleware: ["protected"],
});
</script>

<template>
  <div class="geting-there">
    <div class="wedding-hero">
      <div class="wedding-hero__heading">
        <div class="transform">
          <h1>Getting</h1>
          <h1 class="pb-10">There</h1>
        </div>
      </div>
    </div>

    <div class="info-section">
      <NuxtLink
        target="_blank"
        class="link"
        to="https://maps.app.goo.gl/hoVmCuADSdGsg4fh9"
      >
        <h3 class="">The Ravenswood</h3>
      </NuxtLink>
      <p>
        Cinder Hill, Sharpthorne, West Sussex,
        <span class="postcode">RH19 4HY</span>
      </p>
    </div>

    <div class="info-section">
      <h3>Driving</h3>

      <em>There is plenty of on-site parking.</em>

      <ListData
        :headings="[
          'From Portchester',
          'From Central London',
          'From Bath',
          'From Cotswolds',
        ]"
        :values="['1.5 hours', '2 hours', '2.5 hours', '2.5 hours']"
      />
    </div>

    <div class="info-section">
      <h3>Train</h3>

      <em>Dont forget to book taxis to and from the station. </em>

      <ListData
        :headings="[
          'From London Bridge to Wivelsfield',
          'From Victoria to Haywards Heath',
        ]"
        :values="[
          '1 hour (20 mins taxi to venue)',
          '50mins (15 mins taxi to venue)',
        ]"
      />
    </div>

    <div class="info-section max-20">
      <h3>Taxis</h3>

      <p class="titles">East Grinstead</p>

      <ListData
        :headings="['Western Cars', 'Evo Cars']"
        :values="['01342 300000', '01342 324444']"
      />

      <p class="titles">Haywards Heath</p>

      <ListData
        :headings="['Evo Cars', 'Smith Taxis']"
        :values="['01444 443 300', '01444 304304']"
      />

      <p class="titles">Crawley</p>

      <ListData
        :headings="['Alpha Cars', 'United Cars', 'Metro Cars']"
        :values="['01293 400600', '01293 429429', '01293 415415']"
      />
    </div>
  </div>
</template>
