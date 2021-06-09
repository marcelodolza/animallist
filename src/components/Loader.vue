<template>
  <div
    class="
      Loader
      fixed
      left-0
      right-0
      top-0
      h-full
      flex
      items-center
      justify-center
      z-50
    "
    :class="{ 'Loader--hidden': !visible }"
  >
    <img
      class="Loader__rings absolute w-14 transform-gpu"
      src="@/assets/images/rings.svg"
      alt="Loading"
    />
    <svg class="Loader__background h-full w-full" viewBox="0 0 300 300">
      <circle
        cx="150"
        cy="151"
        r="120%"
        fill="none"
        stroke-width="240%"
      ></circle>
    </svg>
  </div>
</template>

<script>
export default {
  name: "Loader",
  props: {
    visible: {
      type: Boolean,
    },
  },
};
</script>

<style scoped lang="scss">
.Loader {
  &__background circle {
    stroke: $color-primary;
    transition: stroke-width 1.2s $easing-base;
  }
  &__rings {
    transition: opacity 0.6s ease, transform 0.5s $easing-base;
  }

  &--hidden {
    @apply pointer-events-none;

    .Loader {
      &__background circle {
        @apply stroke-0;
      }
      &__rings {
        @apply scale-300 opacity-0;
      }
    }
  }
}
</style>
