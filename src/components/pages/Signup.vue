<template>
  <div class="section-login">
    <div class="login">
      <SignInNav />
      <div v-if="loading">
        <Spinner />
      </div>
      <SignupForm />
      <Footer />
    </div>
  </div>
</template>

<script>
import SignupForm from "../utilities/SignupForm.vue";
import Footer from "../utilities/Footer.vue";
import SignInNav from "../utilities/SignInNav.vue";
import { useMovieStore } from "../../store/UseMovieStore";
import { storeToRefs } from "pinia";
import Spinner from '../utilities/Spinner.vue';
export default {
  components: {
    SignupForm,
    Footer,
    Spinner,
    SignInNav,
  },
  setup() {
    const store = useMovieStore();
    const { loading } = storeToRefs(store);

    return {
      loading,
    };
  },
};
</script>
