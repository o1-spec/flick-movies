<template>
  <div class="section-movies">
    <NavMovies />
    <CategoriesLink />
    <MoviesSection />
    <Footer />
  </div>
</template>

<script>
import NavMovies from "../utilities/NavMovies.vue";
import Footer from "../utilities/Footer.vue";
import MoviesSection from "../utilities/MoviesSection.vue";
import CategoriesLink from "../utilities/CategoriesLink.vue";
import { onMounted } from "vue";
export default {
  components: {
    NavMovies,
    CategoriesLink,
    MoviesSection,
    Footer,
  },
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0);
    });
  },
};
</script>

<style></style>
