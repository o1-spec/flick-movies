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
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useMovieStore } from "../../store/UseMovieStore";
export default {
  setup() {
    const store = useMovieStore();
    const user = computed(() => store.user);
    const searchValue = ref("");

    const handleSearch = () => {
      if (!searchValue.value) return;

      store.fetchSearch(searchValue.value);
    };

    return {
      user,
      searchValue,
      store,
      handleSearch,
    };
  },
};
</script>

<style scoped>
.nav-movies-back {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.back {
  margin-right: 1rem;
}

.search-btn {
  background: #000;
  color: #fff;
  font-size: 1.3rem;
  padding: 1rem;
  border: 1px solid #fff;
  border-radius: 5px;
  margin-left: 2rem;
  cursor: pointer;
}
</style>
