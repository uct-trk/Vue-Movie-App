<template>
  <div>
    <div class="border-b border-gray-600">
      <div class="flex container mx-auto mt-20 pb-5">
        <img :src="posterPath" alt="movie" class="w-64" />
        <div class="ml-24">
          <h1 class="text-4xl font-semibold">{{ movie.title }}</h1>
          <span class="flex text-sm text-gray-500 mt-5">
            <i class="fas fa-star text-yellow-500"></i>
            <span class="ml-3 mr-3"
              >{{ movie.vote_average * 10 }}% | {{ movie.release_date }}</span
            >
            <br />

            <span
              v-for="(item, index) in movie.genres"
              :key="index"
              class="text-sm text-gray-500 ml-1"
              >{{ item.name }}
              <span v-if="movie.genres.length - 1 != index">,</span></span
            >
          </span>

          <p class="mt-5">
            {{ movie.overview }}
          </p>
          <div class="mt-5">
            <br />
            <span class="mt-5 font-semibold">Featured Cast</span>
            <div class="flex">
              <div v-for="(crew, index) in crews" :key="index">
                <div v-if="index < 2" class="flex flex-col mt-5 mr-5">
                  <span>{{ crew.name }}</span>
                  <span class="text-gray-500">{{ crew.job }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-5 text-black font-bold">
            <a
              @click.prevent="openYoutubeModel"
              target="_blank"
              class="rounded bg-yellow-500 px-5 py-4 cursor-pointer"
            >
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
    <Images v-on:on-image-click="showImageModel" />
    <MediaModel v-model="modelOpen" :mediaURL="mediaURL" :isVideo="this.isVideo"/>
  </div>
</template>

<script>
import Cast from "./Cast.vue";
import Images from "./Images.vue";
import MediaModel from "./model/MediaModel.vue";
import axios from "axios";
export default {
  name: "Movie",
  data() {
    return {
      movie: [],
      crews: [],
      videos: [],
      modelOpen: false,
      isVideo: false,
      mediaURL: "",
    };
  },
  components: {
    Cast,
    Images,
    MediaModel,
  },
  mounted() {
    this.fetchMovie(this.$route.params.id);
    this.creditMovie(this.$route.params.id);
    this.trailerMovie(this.$route.params.id);
  },
  methods: {
    async fetchMovie(movieId) {
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=d9a58f68b032567df17dbf974fe13148`
        )
        .then((response) => (this.movie = response.data))
        .catch((err) => console.log(err));
    },
    async creditMovie(movieId) {
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=d9a58f68b032567df17dbf974fe13148`
        )
        .then((response) => (this.crews = response.data.crew))
        .catch((err) => console.log(err));
    },
    async trailerMovie(movieId) {
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=d9a58f68b032567df17dbf974fe13148`
        )
        .then((response) => (this.videos = response.data.results[0]))
        .catch((err) => console.log(err));
    },
    openYoutubeModel() {
      this.modelOpen = true;
      this.isVideo = true;
      this.mediaURL = this.youtubeVideo();
    },
    openImageModel() {
      this.modelOpen = true;
      this.isVideo = false;
    },
    youtubeVideo() {
      return "https://www.youtube.com/embed/" + this.videos?.key;
    },
    showImageModel(imageFullPath) {
      this.modelOpen = true;
      this.isVideo = false;
      this.mediaURL = imageFullPath;
    },
  },
  computed: {
    posterPath() {
      return "https://image.tmdb.org/t/p/w500" + this.movie.poster_path;
    },
  },
};
</script>

<style></style>
