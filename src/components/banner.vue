<template>
  <section class="banner">
    <div class="w-full">
      <template v-for="(slide, index) in slides" :key="index">
        <div
          class="w-full flex banner_container items-center"
          v-if="isActive(index)"
        >
          <div class="flex flex-col justify-center w-1/3">
            <h1 class="font-bold text-5xl">{{ slide.title }}</h1>
            <p class="text-zxl mt-10">{{ slide.description }}</p>
          </div>
          <div class="w-1/2">
            <div class="w-full object-cover" :style="{ height: '400px' }">
              <img
                :src="slide.image"
                v-if="isActive(index)"
                class="h-full object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>
<script>
export default {
  inheritAttrs: false,
  data: function () {
    return {
      current: 0,
      speed: 3000,
      timer: null,
    };
  },
  props: ["slides"],
  methods: {
    startRotation: function () {
      // this.timer = setInterval(this.next, this.speed);
    },
    stopRotation: function () {
      clearTimeout(this.timer);
      this.timer = null;
    },
    next: function () {
      var current = this.current;
      var next = current + 1;

      if (next > this.slides.length - 1) {
        next = 0;
      }
      this.current = next;
      this.setActive(this.current);
    },
    prev: function () {
      var current = this.current;
      var prev = current - 1;

      if (prev < 0) {
        prev = this.slides.length - 1;
      }

      this.current = prev;
      this.setActive(this.current);
    },
    isActive: function (slide) {
      return this.current === slide;
    },
    setActive: function (slide) {
      this.current = slide;
    },
  },
  mounted: function () {
    this.startRotation();
  },
};
</script>
<style scoped>
.slideshow__container {
  /* overflow: hidden; */
  /* position: relative; */

  padding-top: calc(9 / 16 * 100%);

  min-width: 400px;
  width: 50vw;
  height: 0;

  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
}

.banner_container {
  height: calc(100vh - 40px);
  /* pointer-events: none; */
  @apply justify-between;
}

img {
  display: block;
  object-fit: fill;
  opacity: 1;
  transition: opacity 1s;
  @apply w-full h-full;
}
</style>