<template>
  <div class="mx-5">
    <h2 class="mt-5 text-yellow-500 font-semibold uppercase text-lg">
      Popular Movies
    </h2>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8"
    >
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
    </div>
  </div>
</template>

<script>
import MovieItem from "./items/MovieItem.vue";
export default {
  name: "PopularMovies",
  components: {
    MovieItem,
  },
};
</script>

<style></style>
