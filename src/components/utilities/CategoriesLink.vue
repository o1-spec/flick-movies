<template>
  <div class="section-categories">
    <div class="cate-links">
      <a href="/" @click.prevent="fetchGenres(Action)">Action</a>
      <a href="/" @click.prevent="fetchGenres(Adventure)">Adventure</a>
      <a href="/" @click.prevent="fetchGenres(Animation)">Animation</a>
      <a href="/" @click.prevent="fetchGenres(Comedy)">Comedy</a>
      <a href="/" @click.prevent="fetchGenres(Crime)">Crime</a>
      <a href="/" @click.prevent="fetchGenres(Drama)">Drama</a>
      <a href="/" @click.prevent="fetchGenres(Music)">music</a>
      <a href="/" @click.prevent="fetchGenres(Romance)">Romance</a>
      <a href="/" @click.prevent="fetchGenres(scienceFiction)"
        >Science Fiction</a
      >
      <a href="/" @click.prevent="fetchGenres(Horror)">Horror</a>
      <a href="/" @click.prevent="fetchGenres(history)">History</a>
      <a href="/" @click.prevent="fetchGenres(Fantasy)">Fantasy</a>
      <a href="/" @click.prevent="fetchGenres(Family)">Family</a>
      <a href="/" @click.prevent="fetchGenres(scienceFiction)">Sci-fi</a>
      <a href="/" @click.prevent="fetchGenres(Sport)">Sport</a>
      <a href="#" @click.prevent="fetchGenres(Thriller)">Thriller</a>
      <a href="/" @click.prevent="fetchGenres(War)">War</a>
      <a href="/" @click.prevent="fetchGenres(FilmNoir)">Film-Noir</a>
      <a href="/" @click.prevent="fetchGenres(Action)">War</a>
      <a href="/" @click.prevent="fetchGenres(Mystery)">Mystery</a>
    </div>
  </div>
</template>

<script>
import { useMovieStore } from "../../store/UseMovieStore";
import { ref } from "vue";
export default {
  setup() {
    const Action = 28;
    const Adventure = 12;
    const Animation = 16;
    const Comedy = 35;
    const Crime = 80;
    const Drama = 18;
    const music = 10402;
    const Romance = 10749;
    const scienceFiction = 878;
    const Horror = 27;
    const FilmNoir = 11;
    const Family = 10751;
    const Fantasy = 14;
    const History = 36;
    const Music = 10402;
    const SciFi = 18;
    const Sport = 19;
    const Mystery = 16;
    const Documentary = 7;
    const Thriller = 20;
    const War = 21;
    const Western = 2;
    const moviesCollection = ref([]);
    const { fetchGenres } = useMovieStore();

    return {
      Action,
      Adventure,
      Animation,
      Comedy,
      Crime,
      Drama,
      music,
      Romance,
      scienceFiction,
      Horror,
      FilmNoir,
      Family,
      Fantasy,
      History,
      Music,
      SciFi,
      Sport,
      Mystery,
      Documentary,
      Thriller,
      War,
      Western,
      fetchGenres,
    };
  },
};
</script>

<style>
.section-categories {
  padding: 4rem 8rem;
  border-bottom: 2px solid #fff;
}

.cate-links {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
}

.section-categories a {
  color: #fff;
  text-decoration: none;
  font-size: 1.4rem;
  transition: all 0.5s;
}

.section-categories a:hover {
  color: #f03e3e;
}
</style>
