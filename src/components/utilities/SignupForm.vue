<template>
  <div class="login-form sign-in">
    <h3>Sign Up🔥</h3>
    <form class="sign" @submit.prevent="handleSubmit">
      <div class="form-box">
        <label>UserName</label>
        <input type="text" v-model="username" />
      </div>
      <div class="form-box">
        <label>Email Address</label>
        <input type="email" v-model="email" />
      </div>
      <div class="form-box">
        <label>Password</label>
        <input type="password" v-model="password" />
      </div>
      <div class="form-box">
        <label>Confirm Password</label>
        <input type="password" />
      </div>
      <input class="submit" type="submit" value="Sign Up" />
    </form>
    <div class="already">
      Already have an account?
      <a href="/login"> Log in </a>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useMovieStore } from "../../store/UseMovieStore";
import { getAuth, updateProfile } from "firebase/auth";
import { useRouter } from 'vue-router';
export default {
  setup() {
    const store = useMovieStore();
    const email = ref("");
    const password = ref("");
    const username = ref("");
    const router= useRouter()

    const handleSubmit = async () => {
      try {
        await store.signup(email.value, password.value);
        await updateProfile(store.user, { displayName: username.value });
        router.push("/movies"); 
        //console.log(store.user.displayName);
      } catch (err) {
        console.log(err.message);
      } finally{
        email.value = ""
        password.value = ""
        username.value = ""
      }
    };

    const user = getAuth()
    console.log(user.currentUser)
    return {
      email,
      password,
      username,
      handleSubmit,
    };
  },
};
</script>
