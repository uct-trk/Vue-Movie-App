<template>
  <div class="mt-5 flex relative">
    <input
      ref="searchBox"
      type="text"
      class="rounded-full bg-gray-600 px-7 outline-none w-64 h-12 mb-5 mr-5"
      placeholder="Search.."
      @input="debounceSearch"
      v-model="searchTerm"
      @focus="handleFocus"
    />
    <div class="absolute top-2 left-0">
      <i class="fas fa-search mt-3 ml-2 text-gray-300"></i>
    </div>
    <div class="absolute mt-14 ml-2 rounded bg-gray-600 w-60">
      <ul v-if="showSearchResult">
        <li v-for="(movie, index) in searchResult" :key="index">
          <router-link
            :to="`/movie/${movie.id}`"
            @click.native="showSearchResult = false"
            class="flex items-center border-b border-gray-500"
          >
            <img :src="posterPath(movie.poster_path)" alt="" class="w-10" />
            <span class="ml-3">{{ movie.title }}</span>
          </router-link>
        </li>
      </ul>
      <ul v-else>
        <li v-if="noResultFound" class="text-center py-2 font-bold">
          No Result found for "{{ searchTerm }}"
        </li>
      </ul>
    </div>
    <img src="@/assets/profile.jpg" class="w-12 h-12 rounded-full" alt="" />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      searchResult: [],
      searchTerm: "",
      showSearchResult: false,
    };
  },
  mounted() {
    this.fetchSearch();
    this.keyboardEvents();
  },
  methods: {
    debounceSearch(event) {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        if (event.target.value.length > 2) {
          this.fetchSearch(event.target.value);
        }
      }, 600);
    },
    async fetchSearch(term) {
      await axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=d9a58f68b032567df17dbf974fe13148&query=${term}`
        )
        .then((response) => (this.searchResult = response.data.results))
        .catch((err) => console.log(err));
      this.showSearchResult = this.searchResult ? true : false;

      console.log(this.noResultFound);
      console.log(this.searchResult);
    },
    posterPath(poster_path) {
      if (poster_path) {
        return "https://image.tmdb.org/t/p/w500" + poster_path;
      } else {
        return "https://via.placeholder.com/50x75";
      }
    },
    handleFocus() {
      if (this.searchTerm != "") {
        this.showSearchResult = true;
      }
    },
    keyboardEvents() {
      let windowObj = this;

      window.addEventListener("click", (e) => {
        if (!this.$el.contains(e.target)) {
          this.showSearchResult = false;
        }
      });
      window.addEventListener("keypress", (e) => {
        if (e.keyCode == "47") {
          e.preventDefault();
          windowObj.$refs.searchBox.focus();
        }
      });
      window.addEventListener("keydown", (e) => {
        if (e.key == "Escape") {
          this.showSearchResult = false;
        }
      });
    },
  },
};
</script>

<style></style>
