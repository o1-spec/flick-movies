import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { defineStore } from "pinia";
import auth from "../firebase";

const KEY = "d4ce9882f4fefb7cafec8972d9f8a82d";

export const useMovieStore = defineStore("getMovies", {
  state: () => ({
    movies: [],
    loading: false,
    user: null,
    authIsReady: false,
    unsubscribeAuthState: null,
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
        console.log;
      } catch (error) {
        console.log(error.message);
      } finally {
        this.loading = false;
      }
    },
    async fetchGenres(genreId) {
      try {
        this.loading = true;

        const res = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&with_genres=${genreId}`
        );
        if (!res.ok)
          throw new Error("Something went wrong with fetching movies");
        const data = await res.json();
        if (data.Response === "false") throw new Error("Movies not found ");
        if (data.results.length === 0)
          throw new Error("No movies found for the search query");
        this.movies = data.results;
        console.log(data.results);
        console.log(this.movies);
      } catch (err) {
        console.log(err.message);
      } finally {
        this.loading = false;
      }
    },
    async fetchSearch(name) {
      try {
        this.loading = true;

        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${name}`
        );
        if (!res.ok)
          throw new Error("Something went wrong with fetching movies");
        const data = await res.json();
        if (data.Response === "false") throw new Error("Movies not found ");
        this.movies = data.results;
        console.log(data.results);
      } catch (err) {
        console.log(err.message);
      } finally {
        this.loading = false;
      }
    },
    getMoviePoster(posterpath) {
      return `https://media.themoviedb.org/t/p/w440_and_h660_face${posterpath}`;
    },
    async signup(email, password) {
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        if (res) {
          this.user = res.user;
        } else {
          throw new Error("Could not complete login");
        }
      } catch (error) {
        console.log(error.message);
      }
    },
    async login(email, password) {
      try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        if (res) {
          this.user = res.user;
          console.log("login action");
        } else {
          throw new Error("Could not complete login");
        }
      } catch (error) {
        console.error(error.message);
      }
    },
    async logout() {
      try {
        await signOut(auth);
        this.user = null;
      } catch (error) {
        console.error(error.message);
      }
    },
    async initAuthState() {
      try {
        const user = auth.currentUser;
        if (user) {
          this.user = user;
          this.authIsReady = true;
        } else {
          this.authIsReady = true;
        }
        this.unsubscribeAuthState = onAuthStateChanged(auth, (user) => {
          this.user = user;
        });
      } catch (error) {
        console.error("Error initializing auth state:", error);
      }
    },
    destroy() {
      if (this.unsubscribeAuthState) {
        this.unsubscribeAuthState();
      }
    },
  },
});
