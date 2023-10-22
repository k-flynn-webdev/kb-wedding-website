<script setup></script>

<template>
  <div class="card bg-base-100 shadow-xl w-full">
    <div class="card-body">
      <h2 class="card-title">
        <slot name="title" />
      </h2>

      <slot />

      <div class="card-actions justify-end">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>
