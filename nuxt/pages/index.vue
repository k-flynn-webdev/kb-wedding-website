<script lang="ts" setup>
definePageMeta({
  // middleware: ["protected"],
});
</script>

<template>
  <div class="wedding-hero">
    <div class="wedding-hero__heading">
      <div class="transform">
        <h1>Kevin</h1>
        <p class="sans">AND</p>
        <h1 class="pb-10">Belinda</h1>
      </div>
    </div>
  </div>

  <p class="wedding-strapline uppercase">We're getting married!</p>

  <div class="wedding-date uppercase">
    <div class="row">
      <div class="col side">
        <p class="day lg">Sunday</p>
        <p class="day mb">Sun</p>
      </div>
      <div class="col">
        <p class="month lg">February</p>
        <p class="month mb">Feb</p>
        <p class="date">0 4</p>
        <p class="year">2024</p>
      </div>
      <div class="col side">
        <p class="time lg">At 1:00pm</p>
        <p class="time mb">1:00pm</p>
      </div>
    </div>
  </div>

  <div class="wedding-location">
    <p>
      The Ravenswood<br />
      Cinder Hill, Sharpthorne, West Sussex, RH19 4HY
    </p>
  </div>

  <!-- <div class="main">
    <InfoBand>
      <div class="row">
        <div class="col mb-5">
          <a
            class="link"
            href="https://maps.app.goo.gl/hoVmCuADSdGsg4fh9"
            >Details</a
          >
        </div>
      </div>
    </InfoBand> -->

  <!--
    <InfoBand heading="RSVP">
      <p>
        Please RSVP as soon as you can, or by Nov 26th, as we are excited to
        know whether you will be joining us :)
      </p>
      <p>
        Please also let us know in the comments: Any allergies, whether you're
        planning to stay overnight Kids & Highchair? 7 available Staying
        overnight? By date ( 27th Nov)
      </p>
    </InfoBand>

    <InfoBand heading="Driving">
      <em>There is plenty of on-site parking.</em>

      <ul>
        <li>From Portchester - 1.5 hours.</li>
        <li>From Central London - 2 hours.</li>
        <li>From Bath - 2.5 hours.</li>
        <li>From Cotswolds - 2.5 hours.</li>
      </ul>
    </InfoBand>

    <InfoBand heading="Train">
      <em>Dont forget to book taxis to and from the station. </em>

      <ul>
        <li>
          From London Bridge to Wivelsfield - 1 hour (20 mins taxi to venue)
        </li>
        <li>
          From Victoria to Haywards Heath - 50mins (15 mins taxi to venue).
        </li>
      </ul>
    </InfoBand>

    <InfoBand heading="Taxis">
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
    </InfoBand>

    <InfoBand heading="Ravenswood Roooms">
      <p>
        We have exclusive use of the Ravenswood on Sunday through to Monday
        morning, so if you wish to stay with us, please book using our wedding
        code <strong class="code">RWBK040224</strong> and
        <a
          class="link link-primary"
          href="/"
          >Link</a
        >.
      </p>
      <p>
        There are 33 rooms, breakfast is included. Check-in is 3pm and Check-out
        is 10:30am with a continental and hot buffet breakfast served 8-10am.
        Prices are £145 - £175 a night.
      </p>

      <p><strong>Pets</strong></p>

      <p>
        Pets are allowed at the venue <em>but</em> they aren’t allowed to stay
        past the meal 😞.
      </p>
    </InfoBand>

    <InfoBand heading="Hotels">
      <ul>
        <li>East Grinstead: Alexander House - 01342 714914</li>
        <li>East Grinstead: Crowne Plaza Felbridge - 01342 337700</li>
        <li>Forest Row: The Brambletye Hotel - 01342 810821</li>
        <li>Forest Row: Roebuck Hotel- 01342 823811</li>
        <li>West Hoathly: The Cat Inn - 01342 810369</li>
        <li>
          East Grinstead and Haywards Heath also offer Premier Inn and
          Travelodge options.
        </li>
      </ul>
    </InfoBand>

    <div class="info">
      <strong>The Big Day</strong>

      <p>
        The venue opens at 12:00 PM for guests, if you want to get a start
        early, there is a bar on site. Please arrive dressed for the wedding,
        (wedding casual) Have a big breakfast as canapes will be served after
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

    <InfoBand heading="Gifts & Wishing Well">
      <p>
        Your presence on our wedding day is our biggest gift to make this day
        beautiful.
      </p>
      <p>
        If you would like to contribute to our honeymoon and new life as a
        couple in creating a family, a wishing well will be present at the venue
        on the day. Alternatively for those digitally minded, here is a
        <a
          class="link link-primary"
          href=""
          >link</a
        >
        to support our fund.
      </p>
    </InfoBand>

    <InfoBand heading="Don’t Bring">
      <ul>
        <li>Alcohol - strict BYO rules</li>
        <li>Fireworks</li>
        <li>
          Paper Confetti (our beautiful flower girls will hand out confetti out
          on the big day!)
        </li>
      </ul>
    </InfoBand>

    <InfoBand heading="Do">
      <p>
        Bring yourselves and the best weather, it is February after all and it
        will be a day to remember!
      </p>
    </InfoBand> -->
  <!-- </div> -->
</template>
