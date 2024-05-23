<template>
  <div class="section-login">
    <div class="login">
      <SignInNav />
      <SignupForm />
      <Footer />
    </div>
  </div>
</template>

<script>
import SignupForm from "../utilities/SignupForm.vue";
import Footer from "../utilities/Footer.vue";
import SignInNav from "../utilities/SignInNav.vue";
export default {
  components: {
    SignupForm,
    Footer,
    SignInNav,
  },
};
</script>
