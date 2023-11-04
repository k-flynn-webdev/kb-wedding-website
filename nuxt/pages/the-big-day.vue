<script lang="ts" setup>
definePageMeta({
  // middleware: ["protected"],
});
</script>

<template>
  <div class="the-big-day">
    <div class="wedding-hero">
      <div class="wedding-hero__heading">
        <div class="transform">
          <h1>The Big Day</h1>
        </div>
      </div>
    </div>

    <div class="max-35">
      <p class="mb-6">
        The venue opens at 12:00 PM for guests, if you want to get a start
        early, there is a bar on site. Please arrive dressed for the wedding,
        (wedding casual). Have a big breakfast as canapes will be served after
        the ceremony at 2pm.
      </p>

      <div class="max-30">
        <ListData
          :headings="[
            '12:00 PM',
            '1:00 PM',
            '1:30 PM',
            '3:00 PM',
            '3:30 PM',
            '6:00 PM',
            '7:00 PM',
            '8:30 PM',
            '11:30 PM',
          ]"
          :values="[
            'Doors Open',
            'Ceremony',
            'Group Photos, Drinks Reception & Canapes',
            'Check in & Free time',
            'Wedding Breakfast',
            'Coats on for Sparklers outside, Drinks & more Photos',
            'First Dance',
            'Evening Buffet',
            'Lights on & Taxi Time!',
          ]"
        />
      </div>
    </div>

    <div class="max-30">
      <h3>Dont Bring</h3>

      <ListData
        :headings="['Alcohol', 'Fireworks', 'Paper Confetti']"
        :values="[
          'strict BYO rules',
          '',
          '(our beautiful flower girls will hand confetti out on the big day!)',
        ]"
      />
    </div>

    <div class="max-35">
      <h3>Do Bring</h3>

      <p>
        Bring yourselves and the best weather, it is February after all and it
        will be a day to remember!
      </p>
    </div>

    <div class="max-35">
      <h3>Gifts</h3>
      <p>
        Your presence on our wedding day is our biggest gift to make this day
        beautiful.
      </p>
      <p>
        If you would like to contribute to our honeymoon and new life as a
        couple in creating a family, a wishing well will be present at the venue
        on the day. Alternatively for those digitally minded, check back later
        for a link.
      </p>
    </div>
  </div>
</template>
