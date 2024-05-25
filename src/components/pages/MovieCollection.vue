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
export default {
  components: {
    NavMovies,
    CategoriesLink,
    MoviesSection,
    Footer,
  },
};
</script>

<style>

</style>
