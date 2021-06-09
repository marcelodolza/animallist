<template>
  <li
    class="CategoryItem text-center inline-flex items-center flex-col mr-4"
    :class="{ 'CategoryItem--active': active }"
  >
    <div
      class="
        bg-white
        rounded-md
        h-10
        w-10
        mb-1
        p-4
        flex
        items-center
        justify-center
        cursor-pointer
        transition
        duration-300
        ease-in-out
        hover:shadow-md
        hover:bg-red-400
        hover:text-white
      "
      :class="{ 'bg-red-400 shadow-lg': active }"
    >
      <div :class="{ 'filter invert': active }">
        <slot />
      </div>
    </div>
    <h2
      class="
        block
        text-sm
        font-semibold
        cursor-pointer
        capitalize
        overflow-dots
        w-10
      "
    >
      {{ name }}
    </h2>
  </li>
</template>

<script>
export default {
  name: "CategoryItem",
  props: {
    name: String,
    icon: String,
    active: Boolean,
  },
};
</script>

<style scoped lang="scss">
.CategoryItem {
  &:not(.CategoryItem--active) {
    & > div:hover {
      img {
        @apply filter invert transition-all duration-300;
      }
    }
  }
}
</style>
