<template>
  <div>
    <router-link :to="`/actor/${actor.id}`">
      <img :src="posterPath" alt="" />
      <h3>{{ actor.name }}</h3>
      <p class="text-gray-400">
        {{ knownFor }}
      </p>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    actor: {
      required: true,
    },
  },
  computed: {
    posterPath() {
      return "https://image.tmdb.org/t/p/w500" + this.actor.profile_path;
    },
    knownFor() {
      let knownStr = "";
      for (let index = 0; index < this.actor.known_for.length - 1; index++) {
        knownStr += this.actor.known_for[index].title;
      }
      return knownStr;
    },
  },
};
</script>

<style></style>
