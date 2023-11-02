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
          <h1>Big Day</h1>
        </div>
      </div>
    </div>

    <div class="info-section">
      <p class="mb-6">
        The venue opens at 12:00 PM for guests, if you want to get a start
        early, there is a bar on site. Please arrive dressed for the wedding,
        (wedding casual). Have a big breakfast as canapes will be served after
        the ceremony at 2pm.
      </p>

      <ul>
        <li><span class="time">12:00 PM</span> - Doors Open</li>
        <li><span class="time">1:00 PM</span> - Ceremony</li>
        <li>
          <span class="time">1:30 PM</span> - Group Photos, Drinks Reception &
          Canapes
        </li>
        <li><span class="time">3:00 PM</span> - Check in & Free time</li>
        <li><span class="time">3:30 PM</span> - Wedding Breakfast</li>
        <li>
          <span class="time">6:00 PM</span> - Coats on for Sparklers outside,
          Drinks & more Photos
        </li>
        <li><span class="time">7:00 PM</span> - First Dance</li>
        <li><span class="time">8.30 PM</span> - Evening Buffet</li>
        <li><span class="time">11:30 PM</span> - Lights on & Taxi Time!</li>
      </ul>
    </div>

    <div class="info-section">
      <h3>Dont Bring</h3>

      <ul>
        <li>Alcohol - strict BYO rules</li>
        <li>Fireworks</li>
        <li>
          Paper Confetti (our beautiful flower girls will hand confetti out on
          the big day!)
        </li>
      </ul>
    </div>

    <div class="info-section">
      <h3>Do Bring</h3>

      <p>
        Bring yourselves and the best weather, it is February after all and it
        will be a day to remember!
      </p>
    </div>

    <div class="info-section">
      <h3>Gifts</h3>
      <p>
        Your presence on our wedding day is our biggest gift to make this day
        beautiful.
      </p>
      <p>
        If you would like to contribute to our honeymoon and new life as a
        couple in creating a family, a wishing well will be present at the venue
        on the day. Alternatively for those digitally minded, here is a
        <NuxtLink
          target="_blank"
          class="link mb-0"
          to=""
          >link</NuxtLink
        >
        to support our fund.
      </p>
    </div>
  </div>
</template>
