<template>
  <swiper class="CategorySlider" ref="swiperCategory" :options="swiperOption">
    <swiper-slide v-for="{ name, icon } in categories" :key="name">
      <CategoryItem
        :name="name"
        :active="name === activeCategory"
        @click.native="setCategory(name)"
      >
        <img :src="icon" :alt="name" class="-scale-x-1 transform" />
      </CategoryItem>
    </swiper-slide>
  </swiper>
</template>

<script>
import categories from "@/data/categories";
import CategoryItem from "@/components/CategoryItem";
export default {
  name: "CategorySlider",
  components: {
    CategoryItem,
  },
  data() {
    return {
      categories,
      activeCategory: "cats",
      swiperOption: {
        slidesPerView: "auto",
      },
    };
  },
  mounted() {
    const { category } = this.$route.query;
    if (category) this.setCategory(category);
  },
  methods: {
    setCategory(category) {
      this.activeCategory = category;

      this.$router.push({ path: "/", query: { category } }).catch(() => {});

      this.$emit("onUpdateCategory", category);
    },
  },
};
</script>

<style lang="scss">
.CategorySlider {
  .swiper {
    &-slide {
      @apply w-auto;

      &:first-child {
        margin-left: 1.25rem;
      }
    }
  }
}
</style>
