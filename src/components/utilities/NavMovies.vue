<template>
  <div class="nav">
    <div class="nav-content">
      <h3 class="nav-head">Flick-Movies</h3>
      <div class="search">
        <input
          class="search-input"
          type="text"
          placeholder="Search for your movies"
          v-model="searchValue"
          @keyup.enter="handleSearch"
        />
        <button class="search-btn" @click="handleSearch">Search</button>
      </div>
      <div class="nav-movies-back">
        <!--<div class="back">
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
          <span> Back </span>
        </div>-->
        <div class="user-name" v-if="user">
          {{ user.displayName }}
        </div>
        <div
          @mouseenter="showWaitlist"
          @mouseleave="hideWaitlist"
          class="waitlist-icon"
        >
          <div>
            <i class="fa fa-list" aria-hidden="true"></i>
            <span class="watch-list-length">{{watchlist.length}}</span>
          </div>
          <router-link to="/waitlist" class="waitlist-link"
            >Waitlist</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useMovieStore } from "../../store/UseMovieStore";
import { storeToRefs } from "pinia";
export default {
  setup() {
    const store = useMovieStore();
    const user = computed(() => store.user);
    const searchValue = ref("");
    const { watchlist } = storeToRefs(store);

    const handleSearch = () => {
      if (!searchValue.value) return;

      store.fetchSearch(searchValue.value);
    };

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
      searchValue,
      store,
      handleSearch,
      watchlist,
      showWaitlist,
      hideWaitlist,
    };
  },
};
</script>

<style scoped>

</style>
