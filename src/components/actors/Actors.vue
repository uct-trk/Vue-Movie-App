<template>
  <div class="container mx-auto px-4 py-16">
    <h2 class="text-yellow-500 font-semibold text-lg">
      POPULAR ACTORS
    </h2>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
    >
      <ActorItem v-for="actor in actors" :key="actor.id" :actor="actor" />
    </div>
    <div class="mt-5 text-center">
      <a class="mr-3" href="" v-on:click.prevent="previous()">
        Previous
      </a>
      <a href="" v-on:click.prevent="next()">
        Next
      </a>
    </div>
    <!-- <div class="flex justify-center">
      <div class="spinner">
        11
      </div>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
import ActorItem from "./ActorItem.vue";
let currentPage = 1;
export default {
  name: "Actors",
  data() {
    return {
      actors: [],
    };
  },
  components: {
    ActorItem,
  },
  mounted() {
    this.fetchActors(currentPage);
    //this.scroll();
  },
  methods: {
    async fetchActors(page) {
      await axios
        .get(
          "https://api.themoviedb.org/3/person/popular?api_key=d9a58f68b032567df17dbf974fe13148&page=" +
            page
        )
        .then((response) => (this.actors = response.data.results))
        .catch((err) => console.log(err));
    },
    /* scroll() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          currentPage += 1;
          this.fetchActors((currentPage += 1));
        }
      };
    }, */
    next() {
      currentPage += 1;
      this.fetchActors(currentPage);
    },
    previous() {
      currentPage -= 1;
      this.fetchActors(currentPage);
    },
  },
};
</script>

<style></style>
