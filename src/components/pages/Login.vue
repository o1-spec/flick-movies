<template>
  <div class="section-login">
    <div class="login">
      <SignInNav />
      <div v-if="loading">
        <Spinner />
      </div>
      <LoginForm />
      <Footer />
    </div>
  </div>
</template>

<script>
import LoginForm from "../utilities/LoginForm.vue";
import Footer from "../utilities/Footer.vue";
import SignInNav from "../utilities/SignInNav.vue";
import { storeToRefs } from "pinia";
import { useMovieStore } from "../../store/UseMovieStore";
export default {
  components: {
    LoginForm,
    Footer,
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

<style></style>
