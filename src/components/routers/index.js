import { createWebHistory, createRouter } from "vue-router";
import Homepage from "../pages/Homepage.vue";
import Login from "../pages/Login.vue";
import Signup from "../pages/Signup.vue";
import MovieCollection from "../pages/MovieCollection.vue";
import MovieDetails from "../pages/MovieDetails.vue";
import Waitlist from "../pages/Waitlist.vue";
import { useMovieStore } from "../../store/UseMovieStore";
import Error from "../pages/Error.vue";

const routes = [
  { path: "/", name: "Home", component: Homepage },
  { path: "/signup", name: "Signup", component: Signup },
  { path: "/login", name: "Login", component: Login },
  {
    path: "/movies",
    name: "MovieCollection",
    component: MovieCollection,
    //meta: { requiresAuth: true },
  },
  {
    path: "/movies/:id",
    name: "Movie",
    component: MovieDetails,
   // meta: { requiresAuth: true },
  },
  {
    path: "/waitlist",
    name: "Waitlist",
    component: Waitlist,
    //meta: { requiresAuth: true },
  },
  { path: "/:catchAll(.*)", name: "Error", component: Error },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

/*
router.beforeEach((to, from, next) => {
  const store = useMovieStore();
  const isAuthenticated = !!store.user;

  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !isAuthenticated
  ) {
    next({ name: "Login" });
  } else {
    next();
  }
});
*/
export default router;
