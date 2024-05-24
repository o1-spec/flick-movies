<template>
  <div class="nav">
    <div class="nav-content">
      <h3 class="nav-head">Flick-Movies</h3>
      <div class="nav-links">
        <a href="">Movies</a>
        <a href="">Discover</a>
        <a href="">Trending</a>
        <a href="">About Us</a>
      </div>
      <div class="nav-btn" v-if="!user">
        <router-link to="/signup">Sign Up</router-link>
        <router-link to="/login">Login</router-link>
      </div>
      <div v-if="user" class="user-name">
        {{ user.displayName }}
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
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
