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
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
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
      } catch (error) {
        console.log(error.message);
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
          localStorage.setItem("user", JSON.stringify(res.user));
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
          localStorage.setItem("user", JSON.stringify(res.user));
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
        localStorage.removeItem("user");
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
