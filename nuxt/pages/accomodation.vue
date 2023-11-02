<script lang="ts" setup>
definePageMeta({
  // middleware: ["protected"],
});
</script>

<template>
  <div class="accomodation">
    <div class="wedding-hero">
      <div class="wedding-hero__heading">
        <div class="transform">
          <h1>Accomodation</h1>
        </div>
      </div>
    </div>

    <div class="info-section">
      <p class="mt-6 mb-4">
        We have exclusive use of the Ravenswood on Sunday through to Monday
        morning, so if you wish to stay with us, please book using our wedding
        code <strong class="code">RWBK040224</strong> and
        <NuxtLink
          target="_blank"
          class="link mb-0"
          to="https://app.thebookingfactory.com/the-ravenswood1/book/040224-belinda-kevin#/"
          >Link</NuxtLink
        >.
      </p>
      <p>
        There are 33 rooms, breakfast is included. Check-in is 3pm and Check-out
        is 10:30am with a continental and hot buffet breakfast served 8-10am.
        Prices are £145 - £175 a night.
      </p>

      <h6 class="mt-5"><strong>Pets</strong></h6>

      <p>
        Pets are allowed at the venue <em>but</em> they aren’t allowed to stay
        past the meal 😞.
      </p>
    </div>

    <div class="info-section">
      <h3>Hotels</h3>

      <ul>
        <li>
          East Grinstead
          <ul>
            <li>Alexander House - 01342 714914</li>
            <li>Crowne Plaza Felbridge - 01342 337700</li>
          </ul>
        </li>
        <li>Forest Row</li>
        <ul>
          <li>The Brambletye Hotel - 01342 810821</li>
          <li>Roebuck Hotel- 01342 823811</li>
        </ul>
        <li>
          West Hoathly
          <ul>
            <li>The Cat Inn - 01342 810369</li>
          </ul>
        </li>
      </ul>

      <em>
        East Grinstead and Haywards Heath also offer Premier Inn and Travelodge
        options.
      </em>
    </div>
  </div>
</template>
