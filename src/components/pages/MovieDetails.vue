<template>
  <div class="movie-details">
    <movieSectionNav />
    <div class="movie-content">
      <div v-if="loading">
        <Spinner />
      </div>
      <div class="movie-content-description">
        <div class="movie-content-title">
          <h3>{{ movieContent?.title || movieContent?.original_name }}</h3>
        </div>

        <div class="movie-content-info">
          <div class="image-wrapper">
            <div class="overlay"></div>
            <img :src="getMoviePoster(movieContent?.poster_path)" alt="" />
          </div>
          <div class="movie-info-head">
            <p class="movie-lang">
              <span>{{
                movieContent?.title || movieContent?.original_name
              }}</span>
              <span>{{ movieContent?.original_language }}</span>
            </p>
            <p class="movie-time">
              <span>
                {{ movieContent?.release_date || movieContent?.first_air_date }}
              </span>
              <span>
                Vote-Average:
                {{ movieContent?.vote_average }}
              </span>
            </p>
          </div>
          <div class="movie-info-content">
            {{ movieContent?.overview }}
          </div>
          <div>
            <button
              v-if="!storeWatchList"
              @click="addToWatchlist(movieContent)"
              class="watchlist"
            >
              Add to Watchlist
            </button>
            <button
              v-else
              @click="removeFromWatchlist(movieContent?.id)"
              class="watchlist"
            >
              Remove from Watchlist
            </button>
          </div>
        </div>
        <img
          class="backdrop_path"
          :src="
            getMoviePoster(
              movieContent?.backdrop_path || movieContent?.poster_path
            )
          "
          :alt="movieContent?.original_title || movieContent?.title"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { ref, onMounted, watch, computed } from "vue";
import { useRoute } from "vue-router";
import { useMovieStore } from "../../store/UseMovieStore";
import { storeToRefs } from "pinia";
import movieSectionNav from "../utilities/movieSectionNav.vue";
import Footer from "../utilities/Footer.vue";
import Spinner from "../utilities/Spinner.vue";

export default {
  components: {
    movieSectionNav,
    Spinner,
    Footer,
  },
  setup() {
    const route = useRoute();
    const store = useMovieStore();
    const { movies, loading, watchlist } = storeToRefs(store);
    const movieContent = ref(null);
    const movieId = Number(route.params.id);

    console.log(watchlist);
    const storeWatchList = computed(() => store.isInWatchlist(movieId));

    const addToWatchlist = (movie) => {
      store.addToWatchlist(movie);
      console.log(store.watchlist);
    };

    const removeFromWatchlist = (movieId) => {
      store.removeFromWatchlist(movieId);
    };

    onMounted(async () => {
      console.log(movies.value);
      const movie = movies.value.find((movie) => movie.id === movieId);
      movieContent.value = movie || null;
    });

    watch(movieContent, (newVal) => {
      console.log(newVal);
      console.log(movieContent.value);
    });

    return {
      movieContent,
      getMoviePoster: store.getMoviePoster,
      storeWatchList,
      addToWatchlist,
      removeFromWatchlist,
      loading,
    };
  },
};
</script>
