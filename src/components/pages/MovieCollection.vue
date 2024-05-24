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
.section-movies {
  background-image: linear-gradient(to right, black 50%, transparent 100%),
    url("../Images/bg2.webp");
  background-size: auto 100%;
  background-color: #000;
  background-repeat: no-repeat;
  background-position: right center;
  background-attachment: fixed;
}
</style>
