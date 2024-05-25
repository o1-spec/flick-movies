<template>
  <div class="section-waitlist">
    <movieSectionNav />
    <div class="waitlist">
      <h3>Waitlist</h3>
      <div class="waitlist-content">
        <div v-if="watchlist">
          <div class="watchlist-info" v-for="list in watchlist" :key="list.id">
            <img :src="getMoviePoster(list?.poster_path)" alt="" />
            <div class="watchlist-name">
              <p>
                {{ list.original_title || list.title || list.original_name }}
              </p>
              <span>Remove</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { storeToRefs } from "pinia";
import Footer from "../utilities/Footer.vue";
import movieSectionNav from "../utilities/movieSectionNav.vue";
import { useMovieStore } from "../../store/UseMovieStore";
export default {
  components: {
    movieSectionNav,
    Footer,
  },
  setup() {
    const store = useMovieStore();
    const { watchlist } = storeToRefs(store);

    console.log(watchlist);

    return {
      watchlist,
      getMoviePoster: store.getMoviePoster,
    };
  },
};
</script>

<style>

</style>
