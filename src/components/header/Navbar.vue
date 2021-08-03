<template>
  <div class="flex">
    <router-link to="/">
      <img src="@/assets/logo.png" class="w-12 h-12 rounded-full mt-5" alt="" />
    </router-link>
    <ul class="flex mt-8">
      <li>
        <router-link to="/movies" class="ml-5">
          Movies
        </router-link>
      </li>
      <li>
        <router-link to="/actors" class="ml-5">
          Actors
        </router-link>
      </li>
      <li>
        <router-link to="/profile" class="ml-5">
          Profile
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
