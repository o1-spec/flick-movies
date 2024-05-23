import { createWebHistory, createRouter } from "vue-router";
import Homepage from "../pages/Homepage.vue";
import Login from "../pages/Login.vue";
import Signup from "../pages/Signup.vue";
import MovieCollection from "../pages/MovieCollection.vue"

const routes = [
  { path: "/", name: "Home", component: Homepage },
  { path: "/signup", name: "Signup", component: Signup },
  { path: "/login", name: "Login", component: Login },
  {path:"/movies", name: "MovieCollection" , component: MovieCollection}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
