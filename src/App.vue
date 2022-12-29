<template>
  <div id="app">
    <nav class="mx-6">
      <Navbar />
    </nav>
    <div class="max-w-[1440px] container mx-auto">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Nav.vue";
export default {
  name: "HomeView",
  components: {
    Navbar,
  },
};
</script>
