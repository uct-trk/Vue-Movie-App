<template>
  <div id="example">
    <h2 class="uppercase text-yellow-500 font-semibold text-lg mt-20">
      Upcoming Movies
    </h2>
    <carousel-3d
      :controls-visible="true"
      :clickable="true"
      :listData="upcomingMovies"
      :height="500"
      :key="upcomingMovies.length"
    >
      <slide v-for="(slide, i) in upcomingMovies" :key="i" :index="i">
        <figure>
          <img :src="'https://image.tmdb.org/t/p/w500/' + slide.poster_path" />
          <figcaption>
            <router-link :to="`/movie/${slide.id}`">
              {{ slide.title }}
            </router-link>
          </figcaption>
        </figure>
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
import axios from "axios";
export default {
  data() {
    return {
      upcomingMovies: [],
    };
  },
  components: {
    Carousel3d,
    Slide,
  },
  mounted() {
    this.fetchUpComingMovies();
  },
  methods: {
    async fetchUpComingMovies() {
      await axios
        .get(
          "https://api.themoviedb.org/3/movie/upcoming?api_key=d9a58f68b032567df17dbf974fe13148"
        )
        .then((res) => (this.upcomingMovies = res.data.results))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
.carousel-3d-container figure {
  margin: 0;
  cursor: pointer;
}

.carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  bottom: 0;
  position: absolute;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
}
</style>
