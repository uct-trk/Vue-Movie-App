<template>
  <div class="container mx-auto">
    <PopularMovies />
    <UpcomingMovies/>
  </div>
</template>

<script>
import PopularMovies from "../components/PopularMovies.vue";
import UpcomingMovies from './UpcomingMovies.vue'
export default {
  name: "Home",
  components: {
    PopularMovies,
    UpcomingMovies
  },
};
</script>

<style></style>
