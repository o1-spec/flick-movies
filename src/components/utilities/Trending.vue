<template>
  <div class="section-trending">
    <h2>Trending Now</h2>
    <div class="trending scroll">
      <div class="move-left">
        <i class="fa-solid fa-chevron-left"></i>
      </div>
      <div
        class="trending-movie"
        v-for="movie in moviesCollection"
        :key="movie.id"
      >
        <img
          :src="moviestore.getMoviePoster(movie.poster_path)"
          :alt="movie.title"
        />
        <div class="trending-info">
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
      <div class="move-right">
        <i class="fa-solid fa-chevron-right"></i>
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

    onMounted(async () => {
      await moviestore.fetchMovies();
      moviesCollection.value = movies.value;
      console.log(moviesCollection.value);
    });

    return {
      moviesCollection,
      moviestore,
      loading,
    };
  },
};
</script>

<style></style>
