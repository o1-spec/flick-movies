<template>
  <div class="sign-in-nav movie-section-nav">
    <h3>Flick-Movies</h3>
    <div v-if="user" class="user-name-box">
      <span class="user-name">
        {{ user.displayName }}
      </span>
      <div class="signout-emoji">
        <i @click="logout" class="fas fa-sign-out-alt"></i>
        <span class="logout-text">Logout</span>
      </div>
    </div>
    <div class="direct">
      <div
        @mouseenter="showWaitlist"
        @mouseleave="hideWaitlist"
        class="waitlist-icon"
      >
        <div>
          <i class="fa fa-list" aria-hidden="true"></i>
          <span class="watch-list-length">{{ watchlist.length }}</span>
        </div>

        <router-link to="/waitlist" class="waitlist-link">Waitlist</router-link>
      </div>
      <div class="icons-contact">
        <i class="fa-brands fa-x-twitter"></i>
        <i class="fa-brands fa-linkedin-in"></i>
        <i class="fa-brands fa-facebook"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useMovieStore } from "../../store/UseMovieStore";
import { storeToRefs } from "pinia";
export default {
  setup() {
    const store = useMovieStore();
    const user = computed(() => store.user);
    const { watchlist} = storeToRefs(store);

    const showWaitlist = () => {
      const waitlistLink = document.querySelector(".waitlist-link");
      waitlistLink.style.visibility = "visible";
    };

    const hideWaitlist = () => {
      const waitlistLink = document.querySelector(".waitlist-link");
      waitlistLink.style.visibility = "hidden";
    };
    return {
      user,
      showWaitlist,
      hideWaitlist,
      watchlist,
      logout: store.logout,
    };
  },
};
</script>

<style></style>
