<template>
  <div class="max-w-[1440px] my-3">
    <div class="flex justify-between">
      <div class="flex gap-4 items-center">
        <span>
          <h1 class="text-black text-xl font-medium">Manage Jobs</h1>
        </span>
        <span> | </span>
        <span>
          <img :src="home" alt="" />
        </span>
      </div>
      <div>
        <button
          class="btn-primary flex items-center hover:scale-105 transition duration-300"
        >
          <span>Add New Job</span>
          <span class="ml-3 text-base">
            <img :src="plus" alt="" />
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import home from "@/assets/images/home-icon.svg";
import plus from "@/assets/images/loupe 3.png";
export default {
  data() {
    return {
      home,
      plus,
    };
  },
};
</script>

<style></style>
