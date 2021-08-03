<template>
  <div>
    <router-link to="/movie/11">
      <img
        src="https://www.themoviedb.org/t/p/w220_and_h330_face/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg"
        alt=""
        class="hover:opacity-75 cursor-pointer transition ease-in-out duration-150"
      />
    </router-link>
    <h3>2067</h3>
    <div class="flex">
      <i class="fas fa-star text-yellow-500"></i>
      <span class="ml-2">47% | 2020-10-01</span> <br />
    </div>
    <span class="text-sm text-gray-500">Drama | Fiction Advanture</span>
  </div>
</template>

<script>
export default {
  name: "MovieItem",
};
</script>

<style></style>
