<template>
  <div>
    <div class="section-head">
      <Nav />
      <Hero />
    </div>
    <Companies />
    <Trending />
    <TopPicks />
    <Info />
    <Footer />
  </div>
</template>

<script>
import Nav from "../utilities/Nav.vue";
import Hero from "../utilities/Hero.vue";
import Companies from "../utilities/Companies.vue";
import Trending from "../utilities/Trending.vue";
import TopPicks from "../utilities/TopPicks.vue";
import Info from "../utilities/Info.vue"
import Footer from "../utilities/Footer.vue";
export default {
  components: {
    Nav,
    Hero,
    Companies,
    Trending,
    TopPicks,
    Info,
    Footer
  },
};
</script>

<style></style>
