<template>
  <div class="movies-section">
    <div class="movie-container">
      <div class="movie-box" v-for="movie in movies" :key="movie.id">
        <img
          :src="moviestore.getMoviePoster(movie.poster_path)"
          :alt="movie.title"
        />
        <div class="movie-box-info">
          <h6>{{ movie.title || movie.name }}</h6>
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
export default {
  setup() {
    const moviestore = useMovieStore();
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

    return {
      movies,
      moviesCollection,
      moviestore,
      loading,
    };
  },
};
</script>

<style>
/**************** MOVIELIST CSS ******************/
.movie-list {
  background-image: url("../public/images/bg2.webp");
  width: 100vw;
  position: relative;
  background-attachment: fixed;
  height: 100%;
  padding: 3rem 5rem;
}

.movie-container {
  padding: 8rem;
}

.movie-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 3.5rem;
  row-gap: 6rem;
}

.movie-box {
  position: relative;
}

.movie-box img {
  width: 100%;
  height: 94%;
  border: 1px solid #fff;
  margin-bottom: 1rem;
}

.movie-box-info {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  position: absolute;
  bottom:6%;
  width: 80%;
  border-radius: 3rem;
  background-color: #000;
  opacity: 0.8;
  padding: 1.5rem;
  margin-bottom: 2rem;
  margin-left: 2rem;
}

.movie-box a {
  text-decoration: none;
}

.movie-box-info h6 {
  color: #fff;
  font-size: 1.4rem;
}

.movie-box-info span {
  color: #fff;
}
</style>
