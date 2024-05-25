<template>
  <div class="spinner-wrapper">
    <i class="fas fa-cog fa-spin"></i>
  </div>
</template>

<script>
export default {
  name: "LoadingSpinner",
};
</script>

<style scoped>
.spinner-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.fas.fa-cog {
  font-size: 3rem;
  color: #f03e3e;
}
</style>
