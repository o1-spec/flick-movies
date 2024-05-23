<template>
  <div class="sign-in-nav">
    <h3>Flick-Movies</h3>
    <div class="back">
      <i class="fa fa-arrow-left" aria-hidden="true"></i>
      <span> Back </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sign-in-nav {
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding: 3rem 8rem;
}

.back {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #fff;
  font-size: 1.5rem;
  background-color: #000;
  padding: 0.8rem;
  border-radius: 3px;
}

.sign-in-nav h3 {
  color: #fff;
  font-size: 2.7rem;
}
</style>
