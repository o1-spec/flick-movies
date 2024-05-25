<template>
  <div class="login-form">
    <h3>Welcome Back</h3>
    <form @submit.prevent="handleSubmit">
      <div class="form-box">
        <label>Email Address</label>
        <input type="email" v-model="email" />
      </div>
      <div class="form-box">
        <label>Password</label>
        <input type="password" v-model="password" />
      </div>
      <input class="submit" type="submit" value="Log in" />
    </form>
    <div class="already">
      Dont have an account?
      <a href="/signup"> Sign Up </a>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useMovieStore } from "../../store/UseMovieStore";
import { useRouter } from "vue-router";
export default {
  setup() {
    const store = useMovieStore();
    const router = useRouter();
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      try {
        await store.login(email.value, password.value);
        router.push("/movies");
      } catch (err) {
        console.log(err.message);
      } finally {
        email.value = "";
        password.value = "";
      }
    };

    return {
      email,
      password,
      handleSubmit,
    };
  },
};
</script>
