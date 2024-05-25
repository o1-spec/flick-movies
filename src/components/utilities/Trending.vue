<template>
  <div class="section-trending">
    <h2>Trending Now</h2>
    <div class="trending scroll" ref="trendingRef">
      <div
        class="move-left"
        @click="handleClick('left')"
        @dblclick="handleDoubleClick('left')"
      >
        <i class="fa-solid fa-chevron-left"></i>
      </div>
      <div
        class="trending-movie"
        v-for="movie in moviesCollection"
        :key="movie.id"
        @click="navigateToMovieDetails(movie.id)"
      >
        <img
          :src="moviestore.getMoviePoster(movie.poster_path)"
          :alt="movie.title"
        />
        <div class="trending-info">
          <h6>{{ movie.title || movie.name }}</h6>
          <span>{{ movie.media_type }}</span>
          <span>{{
            !movie.release_date ? movie.first_air_date : movie.release_date
          }}</span>
        </div>
        <div class="trending-ratings" v-if="movie.vote_average > 6.5">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <div class="trending-ratings" v-if="movie.vote_average > 8.3">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <div class="trending-ratings" v-if="movie.vote_average < 6.5">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <div class="trending-ratings" v-if="movie.vote_average < 4.5">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
      </div>
      <div
        class="move-right"
        @click="handleClick('right')"
        @dblclick="handleDoubleClick('right')"
      >
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { storeToRefs } from "pinia";
import { useMovieStore } from "../../store/UseMovieStore";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const moviestore = useMovieStore();
    const { movies, loading } = storeToRefs(moviestore);
    const moviesCollection = ref([]);
    const trendingRef = ref(null);
    let clickTimeout = null;
    const router = useRouter();

    onMounted(async () => {
      await moviestore.fetchMovies();
      moviesCollection.value = movies.value;
      //console.log(moviesCollection.value);
    });

    const navigateToMovieDetails = (movieId) => {
      router.push({ name: "Movie", params: { id: movieId } });
    };

    const scrollLeft = (skipFour = false) => {
      if (trendingRef.value) {
        const scrollAmount = trendingRef.value.clientWidth * (skipFour ? 4 : 1);
        trendingRef.value.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    };

    const scrollRight = (skipFour = false) => {
      if (trendingRef.value) {
        const scrollAmount = trendingRef.value.clientWidth * (skipFour ? 4 : 1);
        trendingRef.value.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    };

    const handleClick = (direction) => {
      if (clickTimeout) {
        clearTimeout(clickTimeout);
        clickTimeout = null;
      } else {
        clickTimeout = setTimeout(() => {
          if (direction === "left") {
            scrollLeft();
          } else {
            scrollRight();
          }
          clickTimeout = null;
        }, 300); // Adjust the delay as needed
      }
    };

    const handleDoubleClick = (direction) => {
      if (clickTimeout) {
        clearTimeout(clickTimeout);
        clickTimeout = null;
      }
      if (direction === "left") {
        scrollLeft(true);
      } else {
        scrollRight(true);
      }
    };

    return {
      moviesCollection,
      moviestore,
      loading,
      trendingRef,
      handleClick,
      handleDoubleClick,
      navigateToMovieDetails,
    };
  },
};
</script>

<style></style>
