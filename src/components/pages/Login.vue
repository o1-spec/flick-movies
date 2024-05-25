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
import { onMounted } from "vue";
import Spinner from "../utilities/Spinner.vue";
export default {
  components: {
    LoginForm,
    Footer,
    SignInNav,
    Spinner,
  },
  setup() {
    const store = useMovieStore();
    const { loading } = storeToRefs(store);

    onMounted(() => {
      window.scrollTo(0, 0);
    });

    return {
      loading,
    };
  },
};
</script>

<style></style>
