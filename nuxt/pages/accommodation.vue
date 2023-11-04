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
          <h1>Accommodation</h1>
        </div>
      </div>
    </div>

    <div class="max-25">
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
      <p class="mt-2">
        Most rooms accommodate a z-bed or cot please call to confirm 01342 810
        216 after making your booking.
      </p>

      <p class="mt-5"><strong>Pets</strong></p>

      <p>
        Pets are allowed at the venue <em>but</em> they aren’t allowed to stay
        past the meal 😞.
      </p>
    </div>

    <div class="max-25">
      <h3>Hotels</h3>

      <p class="titles">East Grinstead</p>

      <ListData
        :headings="[
          'Alexander House',
          'Crowne Plaza Felbridge',
          'Premier Inn',
          'TravelLodge',
        ]"
        :values="[
          '01342 714914',
          '01342 337700',
          '0333 777 4674',
          ' 0871 559 1884',
        ]"
      />

      <p class="titles">Forest Row</p>

      <ListData
        :headings="['The Brambletye Hotel', 'Roebuck Hotel']"
        :values="['01342 810821', '01342 823811']"
      />

      <p class="titles">West Hoathly</p>

      <ListData
        :headings="['The Cat Inn']"
        :values="['01342 810369']"
      />

      <p class="titles">Haywards Heath</p>

      <ListData
        :headings="['Premier Inn']"
        :values="['0871 527 8000']"
      />
    </div>
  </div>
</template>
