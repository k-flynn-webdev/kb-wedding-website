<script setup></script>

<template>
  <div class="main">
    <NavMobile />
    <NavDesktop />

    <HeroImage />

    <div class="layout-content">
      <slot />
    </div>

    <Footer />
  </div>
</template>
