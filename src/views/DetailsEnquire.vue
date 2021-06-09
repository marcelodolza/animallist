<template>
  <main class="DetailsEnquire bg-white">
    <div class="fixed left-0 right-0 top-0">
      <div class="container flex justify-between items-center p-5">
        <BackButton />
      </div>
    </div>
    <section
      class="
        w-full
        bg-cover bg-center
        flex flex-col
        justify-between
        bg-red-400
        pb-20
        pt-60
      "
    >
      <div class="container">
        <header class="px-11 flex items-center">
          <h2 class="text-3xl font-bold text-white leading-none">Enquire</h2>
        </header>
      </div>
    </section>
    <div class="container relative z-10">
      <section
        class="
          rounded-xl
          bg-white
          pt-5
          pb-7
          px-7
          mx-5
          -mt-20
          mb-10
          flex
          shadow-xl
        "
      >
        <form class="flex flex-col w-full">
          <p class="leading-relaxed mb-5 text-gray-600 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quisquam
            similique veritatis architecto sunt?
          </p>
          <div class="relative mb-4">
            <label for="name" class="leading-7 text-sm text-gray-600"
              >Name</label
            >
            <input
              type="name"
              id="name"
              name="name"
              required
              class="
                w-full
                bg-white
                rounded
                border border-gray-300
                focus:border-blue-500
                focus:ring-2 focus:ring-blue-200
                text-base
                outline-none
                text-gray-700
                py-1
                px-3
                leading-8
                transition-colors
                duration-200
                ease-in-out
              "
            />
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600"
              >Email</label
            >
            <input
              type="email"
              id="email"
              name="email"
              required
              class="
                w-full
                bg-white
                rounded
                border border-gray-300
                focus:border-blue-500
                focus:ring-2 focus:ring-blue-200
                text-base
                outline-none
                text-gray-700
                py-1
                px-3
                leading-8
                transition-colors
                duration-200
                ease-in-out
              "
            />
          </div>
          <div class="relative mb-4">
            <label for="message" class="leading-7 text-sm text-gray-600"
              >Message</label
            >
            <textarea
              id="message"
              name="message"
              required
              class="
                w-full
                bg-white
                rounded
                border border-gray-300
                focus:border-blue-500
                focus:ring-2 focus:ring-blue-200
                h-32
                text-base
                outline-none
                text-gray-700
                py-1
                px-3
                resize-none
                leading-6
                transition-colors
                duration-200
                ease-in-out
              "
            />
          </div>
          <button
            type="submit"
            class="
              text-white
              bg-gray-500
              border-0
              py-2
              px-6
              focus:outline-none
              hover:bg-gray-600
              rounded
              text-lg
            "
          >
            Submit
          </button>
          <p class="text-xs text-gray-500 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            impedit.
          </p>
        </form>
      </section>
    </div>
  </main>
</template>

<script>
import { BackButton } from "../components";
export default {
  name: "DetailsEnquire",
  props: ["category", "animalId"],
  components: {
    BackButton,
  },
};
</script>
