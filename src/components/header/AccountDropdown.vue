<template>
  <div class="relative">
    <button @click="isOpen = !isOpen">
      <img
        src="@/assets/profile.jpg"
        class="w-12 h-12 rounded-full focus:outline-none border-none outline-none"
        alt=""
      />
    </button>

    <button
      @click="isOpen = false"
      v-if="isOpen"
      class="fixed top-0 right-0 bottom-0 w-full h-full opacity-50 bg-black cursor-default"
    ></button>

    <div
      v-if="isOpen"
      class="bg-white rounded-lg absolute py-2 w-48 right-0 shadow-xl"
    >
      <a
        class="text-gray-500 block px-4 py-2 hover:text-white hover:bg-indigo-400 cursor-pointer"
        >Account Settings</a
      >
      <a
        class="text-gray-500 block px-4 py-2 hover:text-white hover:bg-indigo-400 cursor-pointer"
        >Support</a
      >
      <a
      @click.prevent="logout"
        href=""
        class="text-gray-500 block px-4 py-2 hover:text-white hover:bg-indigo-400 cursor-pointer"
        >Logout</a
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  created() {
    const handleEscape = (e) => {
      if (e.key == "Esc" || e.key == "Escape") {
        this.isOpen = false;
      }
    };
    document.addEventListener("keydown", handleEscape);

    this.$once("hook:beforeDestroy", () => {
      document.removeEventListener("keydown",handleEscape);
    });
  },
  methods: {
      logout(){
          this.$store.dispatch("setUserLoggedIn", false)
      }
  },
};
</script>

<style></style>
