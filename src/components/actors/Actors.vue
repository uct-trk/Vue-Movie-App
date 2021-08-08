<template>
  <div class="container mx-auto px-4 py-16">
    <h2 class="text-yellow-500 font-semibold text-lg">
      POPULAR ACTORS
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <ActorItem v-for="(actor) in actors" :key="actor.id" :actor="actor"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ActorItem from "./ActorItem.vue";
export default {
  name: "Actors",
  data() {
    return {
      actors: []
    }
  },
  components: {
    ActorItem,
  },
  mounted() {
    this.fetchActors(1)
  },
  methods: {
    async fetchActors(page){
      await axios.get("https://api.themoviedb.org/3/person/popular?api_key=d9a58f68b032567df17dbf974fe13148&page=" + page)
      .then(response => this.actors = response.data.results)
      .catch(err => console.log(err))
    }
  },
};
</script>

<style></style>
