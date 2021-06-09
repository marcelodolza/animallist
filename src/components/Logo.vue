<template>
  <div class="Logo">
    <h1 class="sr-only">Engage</h1>
    <router-link to="/">
      <img src="@/assets/images/logo.svg" alt="Engage" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Logo",
};
</script>

<style scoped lang="scss">
.Logo {
  img {
    @apply h-auto w-24;
  }
}
</style>
