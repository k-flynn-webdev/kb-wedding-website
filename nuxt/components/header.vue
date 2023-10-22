<script setup>
const user = useUser();
</script>

<template>
  <div class="navbar">
    <div class="flex-1">
      <ul class="menu menu-horizontal px-1">
        <li>
          <NuxtLink
            class="btn btn-ghost normal-case text-xl"
            to="/"
            >MeetUp</NuxtLink
          >
        </li>
      </ul>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li v-if="user.userId">
          <NuxtLink
            class="link"
            to="/profile"
          >
            <AvatarUser :user="user" />
          </NuxtLink>
        </li>
        <li v-else>
          <NuxtLink
            class="link"
            to="/login"
          >
            login
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
