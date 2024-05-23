<template>
  <div class="section-top-pick">
    <h2>Top Picks For You</h2>
    <div class="top-pick scroll">
      <div class="top-pick-movie" v-for="movie in topMovies" :key="movie.id">
        <img
          :src="moviestore.getMoviePoster(movie.poster_path)"
          :alt="movie.title"
        />
        <div class="top-pick-info">
          <h6>
            {{ movie.title || movie.name }}
          </h6>
          <span>
            {{ movie.media_type }}
          </span>
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
     
    </div>
  </div>
</template>

<script>
import { storeToRefs } from "pinia";
import { useMovieStore } from "../../store/UseMovieStore";
import { onMounted, ref } from "vue";

export default {
  setup() {
    const moviestore = useMovieStore();
    const { movies, loading } = storeToRefs(moviestore);
    let moviesCollection = ref([]);
    let topMovies = ref([]);

    onMounted(async () => {
      await moviestore.fetchMovies();
      moviesCollection.value = movies.value;
      moviesCollection.value.map((movie) => {
        if (movie.vote_average > 7.6) {
          topMovies.value.push(movie);
        }
        //console.log(topMovies.value);
      });
    });

    return {
      moviesCollection,
      loading,
      moviestore,
      topMovies,
    };
  },
};
</script>

<style></style>
