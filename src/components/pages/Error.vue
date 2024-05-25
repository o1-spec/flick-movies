<template>
  <div class="error-section">
    <SignInNav />
    <div class="error-page">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <router-link to="/" @click="router.go(-1)">Go back </router-link>
    </div>
    <Footer />
  </div>
</template>

<script>
import SignInNav from "../utilities/SignInNav.vue";
import Footer from "../utilities/Footer.vue";
import { useRouter } from "vue-router";
export default {
  components: {
    SignInNav,
    Footer,
  },
  setup() {
    const router = useRouter();

    return {
      router,
    };
  },
};
</script>

<style>
.error-section {
  background-image: linear-gradient(to right, black 50%, transparent 100%),
    url("../Images/bg-1.jpg");
  background-size: auto 100%;
  background-color: #000;
  background-repeat: no-repeat;
  background-position: right center;
  background-attachment: fixed;
}

.error-page {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  padding: 11.5rem 0.6rem;
  color: #fff;
}

.error-page h1 {
  font-size: 4rem;
}

.error-page p {
  color: #fff;
  font-size: 1.4rem;
}

.error-page a {
  background-color: #f03e3e;
  color: #fff;
  border-radius: 6px;
  text-decoration: none;
  font-size: 1.3rem;
  padding: 0.7rem 1.7rem;
}
</style>
