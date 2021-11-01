<template>
  <base-popover class="md:w-1/4 product-item">
    <template #activator>
      <div class="w-full">
        <div class="item-img">
          <img :src="item.image" alt="" srcset="" />
        </div>
        <div class="item-content">
          <div class="content-desc">
            {{ item.title }}
          </div>
          <div class="content-price">${{ item.price }}</div>
        </div>
      </div>
    </template>
    <template #default>
      <div class="w-full">
        <div class="item-img">
          <img :src="item.image" alt="" srcset="" />
        </div>
        <div class="item-content">
          <div class="content-desc">
            {{ item.title }}
          </div>
          <div class="content-price">${{ item.price }}</div>
        </div>
      </div>
    </template>
  </base-popover>
</template>
<script>
export default {
  props: ["item"],
  setup() {},
};
</script>