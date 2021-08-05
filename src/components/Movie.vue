<template>
  <div>
    <div class="border-b border-gray-600">
      <div class="flex container mx-auto mt-20 pb-5">
        <img
          src="https://www.themoviedb.org/t/p/w220_and_h330_face/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg"
          alt="movie"
          class="w-64"
        />
        <div class="ml-24">
          <h1 class="text-4xl font-semibold">Jumanji</h1>
          <span class="flex text-sm text-gray-500 mt-5">
            <i class="fas fa-star text-yellow-500"></i>
            <span class="ml-3">47% | 2020-10-01</span> <br />

            <span class="text-sm text-gray-500">Drama | Fiction Advanture</span>
          </span>

          <p class="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit soluta
            eos incidunt exercitationem minima id.
          </p>
          <div class="mt-5">
            <br />
            <span class="mt-5 font-semibold">Featured Cast</span>
            <div class="flex">
              <div class="flex flex-col mt-5 mr-5">
                <span>Scott Sliver Writer</span>
                <span class="text-gray-500">Writer</span>
              </div>
              <div class="flex flex-col mt-5">
                <span>Bruce Berman</span>
                <span class="text-gray-500">Executive Producer</span>
              </div>
            </div>
          </div>
          <div class="mt-5 text-black font-bold">
            <a href="#" class="rounded bg-yellow-500 px-5 py-4">
              <i class="far fa-play-circle mr-1"></i>
              Play Trailer
            </a>
            <a href="#" class="rounded bg-yellow-500 px-5 py-4 ml-5">
              <i class="fas fa-heart"></i>
              Favourite
            </a>
          </div>
        </div>
      </div>
    </div>
    <Cast />
    <Images/>
  </div>
</template>

<script>
import Cast from "./Cast.vue";
import Images from "./Images.vue";
export default {
  name: "Movie",
  components: {
    Cast,
    Images
  },
};
</script>

<style></style>
