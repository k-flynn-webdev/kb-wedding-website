<script setup></script>

<template>
  <div class="main">
    <NavMobile />
    <NavDesktop />

    <HeroImage />

    <div class="main-inner">
      <slot />
    </div>

    <Footer />
  </div>
</template>
