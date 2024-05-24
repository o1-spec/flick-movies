<template>
  <div class="movie-details">
    <movieSectionNav />
    <div class="movie-content" >
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
            <button class="watchlist">Add to watch list</button>
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
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useMovieStore } from "../../store/UseMovieStore";
import { storeToRefs } from "pinia";
import movieSectionNav from "../utilities/movieSectionNav.vue";
import Footer from "../utilities/Footer.vue";

export default {
  components: {
    movieSectionNav,
    Footer,
  },
  setup() {
    const route = useRoute();
    const store = useMovieStore();
    const { movies, loading } = storeToRefs(store);
    const movieContent = ref(null);
    const movieId = Number(route.params.id);
    console.log(movieId)

    onMounted(async () => {
      //await store.fetchMovies();
      console.log(movies.value)
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
    };
  },
};
</script>

<style>
.movie-details {
  background-image: linear-gradient(to right, black 50%, transparent 100%),
    url("../Images/bg2.webp");
  background-size: auto 100%;
  background-color: #000;
  color: #fff;
  background-repeat: no-repeat;
  background-position: right center;
  background-attachment: fixed;
}

.movie-content{
  height: 96vw;
}

.movie-content-description {
  max-width: 80rem;
  margin: 0 auto;
  padding: 6rem 1rem;
}

.movie-content-info img {
  width: 100%; 
  height: 20rem;
  object-fit: cover;
}

.movie-content-title {
  color: #fff;
}

.movie-content-title h3 {
  font-size: 3.3rem;
  text-align: center;
  padding-bottom: 3rem;
}

.movie-content-title img {
  width: 80rem;
  height: 40rem;
  object-fit: cover;
}

.movie-content-description {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.movie-info-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1.7rem;
}

.movie-content-info {
  border: 1px solid #fff;
}

.movie-time {
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
}

.movie-time span:nth-child(1) {
  font-size: 2rem;
}

.movie-info-content {
  font-size: 1.65rem;
  padding: 2rem 1.7rem;

  letter-spacing: 0.1px;
}

.movie-lang {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.movie-lang span:nth-child(2) {
  font-size: 1.4rem;
}

.movie-lang span:nth-child(1) {
  font-size: 2rem;
  font-weight: 600;
}

.backdrop_path {
  width: 30rem;
  border: 1px solid #fff;
  margin: 4rem 0rem;
}

.watchlist {
  color: #fff;
  margin: 1.5rem;
  outline: none;
  border: 1px solid #fff;
  border-radius: 7px;
  background-color: #f03e3e;
  font-size: 1.45rem;
  cursor: pointer;
  padding: 1.2rem 1.7rem;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 1;
}

.image-wrapper {
  position: relative;
}
</style>
