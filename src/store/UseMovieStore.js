import { defineStore } from "pinia";

const KEY = "d4ce9882f4fefb7cafec8972d9f8a82d";

export const useMovieStore = defineStore("getMovies", {
  state: () => ({
    movies: [],
    loading: false,
  }),
  getters: {},
  actions: {
    async fetchMovies() {
      try {
        this.loading = true;
        const res = await fetch(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`
        );

        if (!res.ok) {
          throw new Error("Something went wrong with fetching movies");
        }
        const data = await res.json();
        if (data.Response === "false") throw new Error("Movies not found ");

        this.movies = data.results;
      } catch (error) {
        console.log(error.message);
      } finally {
        this.loading = false;
      }
    },
    getMoviePoster(posterpath) {
      return `https://media.themoviedb.org/t/p/w440_and_h660_face${posterpath}`;
    },
  },
});
