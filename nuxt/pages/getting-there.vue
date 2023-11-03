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

    <div class="wedding-location info-section">
      <NuxtLink
        target="_blank"
        class="link"
        to="https://maps.app.goo.gl/hoVmCuADSdGsg4fh9"
      >
        <h3 class="lg">The Ravenswood</h3>
        <h4 class="mb">The Ravenswood</h4>
      </NuxtLink>
      <p>
        Cinder Hill, Sharpthorne, West Sussex,
        <span class="postcode">RH19 4HY</span>
      </p>
    </div>

    <div class="info-section">
      <h3>Driving</h3>

      <em>There is plenty of on-site parking.</em>

      <div class="ul-holder">
        <ul>
          <li>From Portchester - 1.5 hours.</li>
          <li>From Central London - 2 hours.</li>
          <li>From Bath - 2.5 hours.</li>
          <li>From Cotswolds - 2.5 hours.</li>
        </ul>
      </div>
    </div>

    <div class="info-section">
      <h3>Train</h3>

      <em>Dont forget to book taxis to and from the station. </em>

      <div class="ul-holder">
        <ul>
          <li>
            From London Bridge to Wivelsfield - 1 hour (20 mins taxi to venue)
          </li>
          <li>
            From Victoria to Haywards Heath - 50mins (15 mins taxi to venue).
          </li>
        </ul>
      </div>
    </div>

    <div class="info-section">
      <h3>Taxis</h3>

      <div class="ul-holder">
        <ul>
          <li>East Grinstead</li>
          <ul>
            <li>Western Cars: 01342 300000</li>
            <li>Evo Cars: 01342 324444</li>
          </ul>
        </ul>
        <ul>
          <li>Haywards Heath</li>
          <ul>
            <li>Evo Cars: 01444 443 300</li>
            <li>Smith Taxis: 01444 304304</li>
          </ul>
        </ul>
        <ul>
          <li>Crawley</li>
          <ul>
            <li>Alpha Cars: 01293 400600</li>
            <li>United Cars: 01293 429429</li>
            <li>Metro Cars: 01293 415415</li>
          </ul>
        </ul>
      </div>
    </div>
  </div>
</template>
