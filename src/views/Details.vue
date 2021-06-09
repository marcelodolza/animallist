<template>
  <main class="Details bg-white">
    <div class="fixed z-10 left-0 right-0 top-0">
      <div class="container flex justify-between items-center p-5">
        <BackButton to="/" />

        <router-link
          :to="`/animals/${category}/${animalId}/enquire`"
          class="
            text-sm text-white
            bg-red-400
            py-2
            px-3
            rounded-md
            flex
            items-center
            justify-center
            transition
            duration-300
            hover:bg-red-300
            no-underline
          "
        >
          Enquire <span class="text-base pl-2">›</span>
        </router-link>
      </div>
    </div>
    <section
      class="
        w-full
        bg-cover bg-center
        flex flex-col
        justify-between
        bg-gradient-to-b
        from-gray-300
        to-red-200
        fixed
        left-0
        right-0
        top-0
      "
    >
      <div>
        <FullSlider
          @onUpdateHeight="onUpdateSliderHeight"
          :images="animalById.images"
        />
      </div>
    </section>
    <div
      class="bg-white relative z-10 transition-all duration-500"
      :style="`margin-top: ${sliderHeight}px`"
    >
      <div class="container">
        <header
          class="
            rounded-xl
            bg-white
            py-7
            px-5
            mx-5
            -top-20
            flex flex-col
            shadow-xl
            relative
          "
        >
          <div class="flex justify-between items-center mb-2">
            <h2 class="block text-3xl font-bold">
              {{ animalById.name }}
            </h2>
            <div class="text-sm flex items-center font-bold">
              <img
                src="@/assets/images/icons/marker.svg"
                class="h-5 block mr-1"
              />
              <span class="text-black">
                {{ animalById.distance | distance }}
              </span>
            </div>
          </div>
          <div>
            <strong class="text-sm mb-1 text-black mr-3 text-sm">{{
              animalById.breed
            }}</strong>
            <span class="text-sm text-gray-400 text-sm">{{
              animalById.age | age
            }}</span>
          </div>
        </header>
        <section class="px-10 pb-10 -mt-12">
          <div class="mb-4 flex">
            <div class="w-20 relative">
              <div
                class="
                  group
                  w-full
                  h-full
                  rounded-full
                  overflow-hidden
                  shadow-inner
                  text-center
                  bg-purple
                  table
                  cursor-pointer
                "
              >
                <img
                  :src="animalById.owner.avatar"
                  :alt="animalById.owner.name"
                  class="
                    object-cover object-center
                    w-full
                    h-full
                    visible
                    group-hover:hidden
                  "
                />
              </div>
            </div>
            <div class="w-full flex flex-col justify-center pl-2">
              <h3 class="block text-base font-bold">
                {{ animalById.owner.name }}
              </h3>
              <div class="flex justify-between">
                <div>
                  <span class="text-sm text-gray-400">Owner</span>
                </div>
                <div>
                  <span class="text-sm text-gray-400">
                    {{ animalById.owner.date | date }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <hr class="mt-3 mb-5 border-gray-300 border-b border-solid" />
          <p class="text-sm mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
            numquam, dolorem pariatur maxime earum in rem inventore impedit ad
            dignissimos cum maiores exercitationem sit sunt rerum libero
            reprehenderit, ab ratione.
          </p>
          <p class="text-sm mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe sed
            deserunt, sit, esse minima cumque inventore cupiditate, fugit
            molestiae quam vero quod qui culpa beatae consectetur. Porro sequi
            corrupti commodi tenetur exercitationem tempore excepturi iusto,
            assumenda inventore, possimus autem sed?
          </p>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
import { BackButton, FullSlider } from "../components";
import animals from "@/data/animals";
export default {
  name: "Details",
  props: {
    category: {
      type: String,
      required: true,
    },
    animalId: {
      type: String,
      required: true,
    },
  },
  components: {
    BackButton,
    FullSlider,
  },
  data() {
    return {
      sliderHeight: 400,
    };
  },
  methods: {
    onUpdateSliderHeight(value) {
      this.sliderHeight = value;
    },
  },
  computed: {
    animalById() {
      return animals[this.category].filter(
        (item) => item.id === this.animalId
      )[0];
    },
  },
};
</script>
