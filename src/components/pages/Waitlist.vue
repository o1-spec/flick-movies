<template>
  <div class="section-waitlist">
    <movieSectionNav />
    <div class="waitlist">
      <h3>Waitlist</h3>
      <div class="waitlist-content">
        <div v-if="watchlist">
          <div class="watchlist-info" v-for="list in watchlist" :key="list.id">
            <img :src="getMoviePoster(list?.poster_path)" alt="" />
            <div class="watchlist-name">
              <p>
                {{ list.original_title || list.title || list.original_name }}
              </p>
              <span>Remove</span>
            </div>
          </div>
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
export default {
  components: {
    movieSectionNav,
    Footer,
  },
  setup() {
    const store = useMovieStore();
    const { watchlist } = storeToRefs(store);

    console.log(watchlist);

    return {
      watchlist,
      getMoviePoster: store.getMoviePoster,
    };
  },
};
</script>

<style>
.section-waitlist {
  background-image: linear-gradient(to right, black 50%, transparent 100%),
    url("../Images/bg-image.jpeg");
  background-size: auto 100%;
  background-color: #000;
  background-repeat: no-repeat;
  background-position: right center;
}

.waitlist {
  padding: 4rem 1rem 7rem 1rem;
}

.waitlist h3 {
  color: #fff;
  font-size: 3rem;
  text-align: center;
  padding-bottom: 3rem;
}

.waitlist-content {
  color: #fff;
  border: 1px solid #fff;
  width: 45rem;
  margin: 0 auto;
  padding: 1.7rem;
}

.waitlist img {
  width: 10rem;
  height: 15rem;
  object-fit: cover;
}

.watchlist-info {
  display: flex;
 justify-content: space-between;
 padding-bottom: 2rem;
}

.watchlist-name p{
  font-size: 1.4rem;
}
</style>
