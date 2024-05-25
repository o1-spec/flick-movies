<template>
  <div class="sign-in-nav">
    <h3>Flick-Movies</h3>
    <div @click="router.go(-1)" class="back">
      <i class="fa fa-arrow-left" aria-hidden="true"></i>
      <span> Back </span>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
};
</script>

<style scoped>
.back{
  cursor: pointer;
}
</style>
