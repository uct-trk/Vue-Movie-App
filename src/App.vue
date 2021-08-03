<template>
  <div id="app">
    <div class="flex justify-around border-b border-gray-500">
      <Navbar />
      <SearchBar />
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/header/Navbar.vue";
import SearchBar from "./components/header/SearchBar.vue";
export default {
  name: "App",
  components: {
    Navbar,
    SearchBar,
  },
};
</script>

<style></style>
