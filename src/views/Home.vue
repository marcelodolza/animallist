<template>
  <main class="Home bg-gray-100">
    <div class="container pt-32 pb-10">
      <section class="mt-4 mb-6">
        <CategorySlider @onUpdateCategory="onUpdateCategory" />
      </section>

      <transition name="slide-top" mode="out-in">
        <section v-if="animalsByCategory.length > 0" key="result">
          <transition-group
            name="card"
            class="
              grid grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              gap-4
              pl-5
              pr-5
            "
            enter-active-class="transform-gpu"
            enter-class="opacity-0 -translate-x-full"
            enter-to-class="opacity-100 translate-x-0"
            leave-active-class="absolute transform-gpu"
            leave-class="opacity-100 translate-x-0"
            leave-to-class="opacity-0 -translate-x-full"
            @before-leave="beforeLeave"
          >
            <div
              v-for="animal in animalsByCategory"
              :key="animal.id"
              class="transition-all duration-300"
            >
              <router-link
                :to="`/animals/${activeCategory.toLowerCase()}/${animal.id}`"
                class="no-underline"
              >
                <Card v-bind="animal" />
              </router-link>
            </div>
          </transition-group>
        </section>

        <section v-else key="nodata">
          <div class="container text-sm text-center px-5 pt-16 pb-16">
            <img
              src="@/assets/images/icons/sad.svg"
              alt="Sad emoji"
              class="w-20 mx-auto mb-4"
            />
            <p class="text-base pb-2">
              No animals registered for this category yet
            </p>
            <strong class="text-sm">How about trying later?</strong>
          </div>
        </section>
      </transition>
    </div>
  </main>
</template>

<script>
import animals from "@/data/animals";
import { CategorySlider, Card } from "@/components";

export default {
  name: "Home",
  components: {
    CategorySlider,
    Card,
  },
  data() {
    return {
      activeCategory: "cats",
    };
  },
  methods: {
    onUpdateCategory(category) {
      this.activeCategory = category;
    },
    beforeLeave(el) {
      const { marginLeft, marginTop, width, height } =
        window.getComputedStyle(el);
      el.style.left = `${el.offsetLeft - parseFloat(marginLeft, 10)}px`;
      el.style.top = `${el.offsetTop - parseFloat(marginTop, 10)}px`;
      el.style.width = width;
      el.style.height = height;
    },
  },
  computed: {
    animalsByCategory() {
      return animals[this.activeCategory] || [];
    },
  },
};
</script>
