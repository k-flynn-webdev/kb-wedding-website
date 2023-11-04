<script setup></script>

<template>
  <div class="main">
    <MobileNav />
    <TopNavbar />

    <HeroImage />

    <div class="main-inner">
      <slot />
    </div>

    <Footer />
  </div>
</template>
