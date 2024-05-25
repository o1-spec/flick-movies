<template>
  <div class="section-waitlist">
    <movieSectionNav />
    <div class="waitlist">
      <h3>Watchlist</h3>
      <div class="waitlist-content">
        <div v-if="watchlist.length > 0">
          <div class="watchlist-info" v-for="list in watchlist" :key="list.id">
            <img
              :src="getMoviePoster(list?.poster_path)"
              :alt="list.original_title || list.title || list.original_name"
            />
            <div class="watchlist-info-content">
              <div class="waitlist-text">
                <p>
                  <span>
                    {{
                      list.original_title || list.title || list.original_name
                    }}
                  </span>
                  <span
                    >({{
                      !list.release_date
                        ? list.first_air_date
                        : list.release_date
                    }})</span
                  >
                </p>
                <p class="waitlist-overview">
                  {{ list.overview }}
                </p>
              </div>
              <button
                class="waitlist-text-btn"
                @click="removeFromWatchlist(list.id)"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
        <div class="no-watchlist" v-else>
          <span> You have not added any movie to waitlist </span>
          <router-link to="/movies">Movie Collection</router-link>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { storeToRefs } from "pinia";
import Footer from "../utilities/Footer.vue";
import movieSectionNav from "../utilities/movieSectionNav.vue";
import { useMovieStore } from "../../store/UseMovieStore";
import { onMounted } from "vue";
export default {
  components: {
    movieSectionNav,
    Footer,
  },
  setup() {
    const store = useMovieStore();
    const { watchlist } = storeToRefs(store);

    //console.log(watchlist);

    const removeFromWatchlist = (movieId) => {
      store.removeFromWatchlist(movieId);
    };

    onMounted(() => {
      window.scrollTo(0, 0);
    });

    return {
      watchlist,
      getMoviePoster: store.getMoviePoster,
      removeFromWatchlist,
    };
  },
};
</script>

<style>
.waitlist-text p span:nth-child(1) {
  font-size: 1.5rem;
}

.watchlist-info-content {
  padding-top: 1rem;
}

.waitlist-text p {
  padding-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.waitlist-text p span:nth-child(2) {
  font-size: 1.34rem;
}

.waitlist-overview {
  font-size: 1.24rem;
}

.waitlist-text-btn {
  color: #fff;
  background-color: #f03e3e;
  border: none;
  padding: 1.2rem 1.5rem;
  border-radius: 0.6rem;
  transition: all 0.7s;
  cursor: pointer;
  position: absolute;
  right: 10%;
}

.waitlist-text-btn:hover {
  background-color: #fff;
  color: #f03e3e;
}

.no-watchlist {
  display: flex;
  flex-direction: column;
  color: #fff;
  align-items: center;
  justify-content: center;
  gap: 1.3rem;
  padding: 0.8rem 1rem;
}

.no-watchlist span {
  font-size: 1.4rem;
}

.no-watchlist a {
  background-color: #f03e3e;
  color: #fff;
  border-radius: 6px;
  text-decoration: none;
  font-size: 1.3rem;
  padding: 1.4rem 1.7rem;
}
</style>
