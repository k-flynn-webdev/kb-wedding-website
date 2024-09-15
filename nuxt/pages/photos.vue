<script lang="ts" setup>
const links = [
  [
    "https://photos.app.goo.gl/wdAfwaZ3GoouXCDe6",
    "Photographer Album",
    "photographer.jpeg",
  ],
  [
    "https://photos.app.goo.gl/7UES5NAXbLo1HLA8A",
    "Photobooth Album",
    "photobooth.jpeg",
  ],
  [
    "https://photos.app.goo.gl/ViGee8sYC8vhJxkK7",
    "Social Album",
    "social.jpeg",
  ],
  ["https://youtu.be/atN7YaTXnps", "Short Video", "video-short.jpeg"],
  ["https://youtu.be/5eTkgeq82zk", "Long Video", "video-long.jpeg"],
];
</script>

<template>
  <div class="wedding-hero">
    <div class="wedding-hero__heading extra">
      <div class="transform">
        <h1>Photos</h1>
      </div>
    </div>
  </div>

  <div class="content">
    <ul>
      <template v-for="item in links">
        <NuxtLink
          :to="item[0]"
          class="link"
        >
          <button class="image photo">
            <img :src="`/${item[2]}`" />
          </button>
          <p>{{ item[1] }}</p>
        </NuxtLink>

        <br />
      </template>
    </ul>
  </div>
</template>
