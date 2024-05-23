<template>
  <div class="section-login">
    <div class="login">
      <SignInNav />
      <LoginForm />
      <Footer />
    </div>
  </div>
</template>

<script>
import LoginForm from "../utilities/LoginForm.vue";
import Footer from "../utilities/Footer.vue";
import SignInNav from "../utilities/SignInNav.vue";
export default {
  components: {
    LoginForm,
    Footer,
    SignInNav,
  },
};
</script>

<style>

</style>
