<template>
  <div class="sign-in-nav movie-section-nav">
    <h3>Flick-Movies</h3>
    <div class="direct">
      <div class="user-name" v-if="user">
        {{ user.displayName }}
      </div>
      <div class="icons-contact">
        <i class="fa-brands fa-x-twitter"></i>
        <i class="fa-brands fa-linkedin-in"></i>
        <i class="fa-brands fa-facebook"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useMovieStore } from "../../store/UseMovieStore";
export default {
  setup() {
    const store = useMovieStore();
    const user = computed(() => store.user);

    return {
      user,
    };
  },
};
</script>

<style>
.direct {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.movie-section-nav{
    padding: 3rem 8rem;
    border-bottom: 2px solid #fff;
}

.icons-contact {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.icons-contact i {
  color: #fff;
  font-size: 1.6rem;
}
</style>
