<template>
  <div class="movies-section">
    <div class="movie-container">
      <div v-if="loading">loading</div>
      <div class="movie-box" v-for="movie in movies" :key="movie.id">
        <img
          :src="moviestore.getMoviePoster(movie.poster_path)"
          :alt="movie.title"
        />
        <div class="movie-box-info" @click="navigateToMovieDetails(movie.id)">
          <h6>{{ movie.title || movie.name || movie.original_title }}</h6>
          <span>{{ movie.media_type }}</span>
          <span>{{
            !movie.release_date ? movie.first_air_date : movie.release_date
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, watch } from "vue";
import { useMovieStore } from "../../store/UseMovieStore";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
export default {
  setup() {
    const moviestore = useMovieStore();
    const router = useRouter();
    const { movies, loading } = storeToRefs(moviestore);
    const moviesCollection = ref([]);

    watch(movies, (newMovies) => {
      moviesCollection.value = newMovies;
    });

    onMounted(async () => {
      await moviestore.fetchMovies();
      moviesCollection.value = movies.value;
      //console.log(moviesCollection.value);
    });

    const navigateToMovieDetails = (movieId) => {
      router.push({ name: "Movie", params: { id: movieId } });
    };

    return {
      movies,
      moviesCollection,
      moviestore,
      loading,
      navigateToMovieDetails,
    };
  },
};
</script>

<style></style>
