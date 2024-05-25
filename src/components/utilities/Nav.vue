<template>
  <div class="nav">
    <div class="nav-content">
      <h3 class="nav-head">Flick-Movies</h3>
      <div class="nav-links">
        <div>
          <a href="/movies" v-if="user">Movies</a>
          <a href="/" v-else>Movies</a>
        </div>
        <a href="#top">Discover</a>
        <a href="#trending">Trending</a>
        <a href="#about">About Us</a>
      </div>
      <div class="nav-btn" v-if="!user">
        <router-link to="/signup">Sign Up</router-link>
        <router-link to="/login">Login</router-link>
      </div>
      <div v-if="user" class="user-name-box">
        <div class="user-name">
          {{ user.displayName }}
        </div>
        <div class="signout-emoji">
          <i @click="logout()" class="fas fa-sign-out-alt"></i>
          <span class="logout-text">Logout</span>
        </div>
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
