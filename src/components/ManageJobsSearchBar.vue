<template>
  <div>
    <div class="flex gap-3">
      <div>
        <div
          class="bg-[#8477FA] flex w-[306px] items-center justify-between rounded-l-[5px] h-[50px] px-[19px] py-3 text-white"
        >
          <span>All Categories</span>
          <span>
            <img :src="down" alt="" srcset="" />
          </span>
        </div>
      </div>
      <div class="max-w-lg w-max">
        <!-- <label for="search" class="sr-only text-xs">Search Jobs</label> -->
        <div class="relative z-50">
          <button class="absolute inset-y-0 left-0 pl-3 flex items-center">
            <img :src="search" alt="" srcset="" />
          </button>
          <input
            type="text"
            class="block pl-14 py-[9px] border border-[#8A8A8A] h-12 w-[511px] rounded-md leading-5 text-gray-300 placeholder-gray-400 placeholder-[14px] focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out"
            placeholder="Search Jobs"
          />
          <button
            type="submit"
            id=""
            class="btn-primary absolute inset-y-0 right-0 rounded-[5px] flex items-center"
          >
            Search
          </button>
        </div>
      </div>

      <!-- Slots for dropdown buttons. (Not functional, yet!) -->
      <div class="flex gap-7">
        <div>
          <span>
            <outlined-btn>Date</outlined-btn>
          </span>
        </div>
        <div>
          <span>
            <outlined-btn>Company</outlined-btn>
          </span>
        </div>
        <div>
          <span>
            <outlined-btn>City</outlined-btn>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import search from "@/assets/images/search-icon.png";
import down from "@/assets/images/down-arrow.png";
import OutlinedBtn from "@/components/OutlinedBtn.vue";

export default {
  components: {
    OutlinedBtn,
  },
  data: () => ({
    search,
    down,
  }),
};
</script>

<style></style>
