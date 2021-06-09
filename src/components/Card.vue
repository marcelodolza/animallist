<template>
  <div
    class="
      Card
      bg-white
      rounded-md
      cursor-pointer
      shadow-lg
      flex
      h-full
      transition
      duration-300
      ease-in-out
      hover:shadow-md
    "
  >
    <div class="flex w-2/5">
      <img
        :src="images[0]"
        class="
          w-full
          rounded-bl-md rounded-tl-md rounded-br-1/2
          block
          h-full
          bg-red-100
        "
        :alt="name"
      />
    </div>
    <div class="pl-6 md:pl-4 pr-2 flex flex-col justify-center w-3/5 pt-3 pb-3">
      <h3 class="block font-bold mb-3 text-2xl">{{ name }}</h3>
      <strong class="block text-sm mb-2 text-black leading-4">{{
        breed
      }}</strong>
      <span class="block text-sm text-gray-400">{{ age | age }}</span>
      <div class="text-sm flex items-center mt-4 font-bold">
        <img
          src="@/assets/images/icons/marker.svg"
          alt="Distance in km"
          class="h-5 block mr-1 -ml-1"
        />
        <span class="text-black">
          {{ distance | distance }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    name: String,
    breed: String,
    age: Number,
    distance: Number,
    images: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
