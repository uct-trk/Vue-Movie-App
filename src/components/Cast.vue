<template>
  <div class="border-b border-gray-600 mb-2">
    <div class="container mx-auto px-4 py-4 mb-3">
      <h2 class="text-4xl font-semibold mb-5">
        Cast
      </h2>
      <div
        class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <div class="mr-2" v-for="(cast, index) in casts" :key="index">
          <img
            :src="posterPath(cast)"
            alt=""
            class="hover:opacity-75 cursor-pointer transition ease-in-out duration-150"
          />
          <span class="text-gray-300">{{ cast.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Cast",
  data() {
    return {
      casts: [],
    };
  },
  mounted() {
    this.castMovie(this.$route.params.id);
  },
  methods: {
    async castMovie(movieId) {
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=d9a58f68b032567df17dbf974fe13148`
        )
        .then((response) => (this.casts = response.data.cast))
        .catch((err) => console.log(err));
    },
    posterPath(cast) {
      if (cast.profile_path) {
        return "https://image.tmdb.org/t/p/w300" + cast.profile_path;
      } else {
        return "https://via.placeholder.com/300x450";
      }
    },
  },
};
</script>

<style></style>
