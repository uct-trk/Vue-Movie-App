<template>
  <div class="container mx-auto px-4 py-4">
    <h2 class="text-4xl font-semibold mb-5">
      Images
    </h2>
    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div class="mr-2" v-for="(image,index) in images" :key="index">
        <img
          :src="posterPath(image)"
          alt=""
          class="hover:opacity-75 cursor-pointer transition ease-in-out duration-150"
        />
        <span class="text-gray-300">{{index + 1}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Images",
  data() {
    return {
      images: [],
    };
  },
  
  mounted() {
    this.imageMovie(this.$route.params.id);
  },
  methods: {
    async imageMovie(movieId) {
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=d9a58f68b032567df17dbf974fe13148`
        )
        .then((response) => (this.images = response.data.backdrops))
        .catch((err) => console.log(err));
    },
    posterPath(image) {
      if (image.file_path) {
        return "https://image.tmdb.org/t/p/w300" + image.file_path;
      } else {
        return "https://via.placeholder.com/300x450";
      }
    },
  },
};
</script>

<style></style>
