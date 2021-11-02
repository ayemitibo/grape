<template>
  <div>
    <div class="group-relative border rounded-lg p-4 shadow-sm">
      <div
        class="
          w-full
          min-h-80
          bg-gray-200
          aspect-w-1 aspect-h-1
          rounded-md
          overflow-hidden
          group-hover:opacity-75
          lg:h-96 lg:aspect-none
        "
        @click.prevent="showModal(item)"
      >
        <img
          :src="item.image"
          alt=""
          class="w-full h-full object-top object-cover lg:w-full lg:h-full"
          srcset=""
        />
      </div>
      <div class="mt-4 flex justify-between">
        <div class="mr-6">
          <h3>
            <a
              href="#"
              class="text-3xl text-primary relative"
              @click.prevent="showModal(item)"
            >
              <span aria-hidden="true" class="absolute inset-0"></span>
              {{ item.title }}
            </a>
          </h3>
        </div>
        <p class="text-2xl font-black text-gray-900">${{ item.price }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item"],
  setup() {},
  methods: {
    showModal(item) {
      console.log("here ooo");
      this.$emit("showModal", item);
    },
  },
};
</script>