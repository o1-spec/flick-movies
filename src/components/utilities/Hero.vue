<template>
  <div class="section-hero">
    <div class="hero">
      <div class="hero-text">
        <h2>Watch Free Movies Anytime Anywhere</h2>
        <p>
          The seek is done! Let trackmovies assist you in locating a perfect
          free movie to watch this evening
        </p>
        <router-link v-if="user" to="/movies">Explore Now</router-link>
        <router-link v-else to="/login">Explore Now</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useMovieStore } from "../../store/UseMovieStore";
export default {
  setup() {
    const store = useMovieStore();
    const user = computed(() => store.user);

    return {
      user,
    };
  },
};
</script>
