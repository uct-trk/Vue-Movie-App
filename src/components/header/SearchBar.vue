<template>
  <div class="mt-5 flex relative">
    <input
      type="text"
      class="rounded-full bg-gray-600 px-7 outline-none w-64 h-12 mb-5 mr-5"
      placeholder="Search.."
    />
    <div class="absolute top-2 left-0">
      <i class="fas fa-search mt-3 ml-2 text-gray-300"></i>
    </div>
    <div v-if="false" class="absolute mt-14 ml-2 rounded bg-gray-600 w-60">
      <ul>
        <li class="flex items-center border-b border-gray-500">
          <img
            src="https://www.themoviedb.org/t/p/w130_and_h195_bestv2/r3z70vunihrAkjILQKWHX0G2xzO.jpg"
            alt=""
            class="w-10"
          />
          <span class="ml-3">Breaking Bad</span>
        </li>
      </ul>
    </div>
    <img src="@/assets/profile.jpg" class="w-12 h-12 rounded-full" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
