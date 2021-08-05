<template>
  <div class="mx-5">
    <h2 class="mt-5 text-yellow-500 font-semibold uppercase text-lg">
      Popular Movies
    </h2>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8 overflow-hidden"
    >
      <MovieItem v-for="movie in movies" :key="movie.id" :movie="movie" :genres="genres" />
    </div>
  </div>
</template>

<script>
import MovieItem from "./items/MovieItem.vue";
import axios from "axios";
export default {
  name: "PopularMovies",
  components: {
    MovieItem,
  },
  data() {
    return {
      movies: [],
      genres: [],
    };
  },
  async mounted() {
    this.fetchGenres()
    await axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=d9a58f68b032567df17dbf974fe13148"
      )
      .then((response) => (this.movies = response.data.results))
      .catch((err) => console.log(err));
  },
  methods: {
    async fetchGenres() {
      await axios
        .get(
          "https://api.themoviedb.org/3/genre/movie/list?api_key=d9a58f68b032567df17dbf974fe13148"
        )
        .then((response) => this.genres = response.data.genres)
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style></style>
