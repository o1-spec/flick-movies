<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { onBeforeUnmount, onMounted } from "vue";
import { useMovieStore } from "./store/UseMovieStore";

export default {
  name: "App",
  setup() {
    const store = useMovieStore();

    onMounted(() => {
      store.initAuthState();
    });

    onBeforeUnmount(() => {
      store.destroy();
    });
  },
};
</script>
