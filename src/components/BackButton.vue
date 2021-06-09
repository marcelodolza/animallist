<template>
  <button
    type="button"
    class="
      text-4xl text-white
      rounded-full
      w-10
      h-10
      p-2
      flex
      items-center
      justify-center
      transition
      duration-300
      hover:bg-white hover:bg-opacity-20
    "
    @click.prevent="to ? $router.push(to) : $router.back(-1)"
  >
    <img
      src="@/assets/images/icons/arrow.svg"
      alt="Go back"
      class="block transform rotate-180"
    />
  </button>
</template>

<script>
export default {
  name: "BackButton",
  props: {
    to: String,
  },
};
</script>
