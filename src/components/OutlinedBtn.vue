<template>
  <div>
    <div class="flex">
      <div
        class="flex justify-between items-center text-sm rounded-md border border-[#787777] w-[140px] h-12 px-3 py-4"
      >
        <span>
          <slot> Default</slot>
        </span>
        <span> <img :src="dark" alt="" srcset="" /> </span>
      </div>
    </div>
  </div>
</template>

<script>
import dark from "@/assets/images/arrow-dark.png";
export default {
  data: () => ({
    dark,
  }),
};
</script>

<style></style>
