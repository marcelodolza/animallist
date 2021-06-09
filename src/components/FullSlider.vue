<template>
  <div class="FullSlider" :style="`transform: translateY(${posY}px)`">
    <swiper
      :options="options"
      @slideChangeTransitionEnd="updateSliderHeight"
      @ready="onSliderReady"
    >
      <swiper-slide v-for="(photo, index) in images" :key="index">
        <img :src="photo" alt="" class="mx-auto sm:w-96 w-full" />
      </swiper-slide>
      <div
        v-if="images && images.length > 1"
        class="swiper-pagination top-0 left-0 right-0"
        slot="pagination"
        :style="`transform: translateY(${height - 120}px)`"
      ></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "FullSlider",
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      posY: 0,
      height: 400,
      activeClass: ".swiper-slide-active",
      options: {
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
        },
      },
    };
  },
  created() {
    window.addEventListener("resize", this.updateSliderHeight);
    window.addEventListener("scroll", this.onScroll);
  },
  destroyed() {
    window.removeEventListener("resize", this.updateSliderHeight);
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    updateSliderHeight() {
      const $el = document.querySelector(this.activeClass);

      if (!$el || this.height === $el.clientHeight) return;

      this.height = $el.clientHeight > 400 ? $el.clientHeight : 400;

      this.$emit("onUpdateHeight", this.height);
    },

    // Update the size only when the first image is loaded
    onSliderReady() {
      const img = document.querySelector(`${this.activeClass} > img`);

      if (!img) return;

      if (img.complete) this.updateSliderHeight();
      else {
        img.addEventListener("load", () => this.updateSliderHeight());
        img.addEventListener("error", () =>
          console.warn("Could not load image. Try again later.")
        );
      }
    },

    // To make a parallax effect
    onScroll() {
      if (window.scrollY > this.height) return;

      this.posY = -(window.scrollY / 3);
    },
  },
};
</script>

<style lang="scss">
.FullSlider {
  transition: transform 0.4s $easing-sharp;

  .swiper-container.swiper-container-horizontal {
    .swiper-pagination {
      transition: transform 0.3s $easing-base;

      &-bullet {
        @apply bg-white rounded transform-none h-1.5 w-1.5 transition-all duration-300 m-0.5;

        &:not(.swiper-pagination-bullet-active) {
          @apply opacity-50 scale-90 transform-gpu;
        }

        &-active {
          @apply w-8;
        }
      }
    }
  }
}
</style>
