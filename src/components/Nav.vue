<template>
  <div class="max-w-[1440px]">
    <div class="flex justify-between text-xs mt-6">
      <ul class="flex">
        <li
          :key="index"
          class="mr-7 pt-[13px] pb-[23px]"
          v-for="(navItem, index) in navItems"
        >
          <router-link :to="navItem.url" class="">{{
            navItem.title
          }}</router-link>
        </li>
      </ul>
      <div class="flex">
        <a href="#" class="flex">
          <span>
            <img :src="logo" alt="" srcset="" class="" />
          </span>
          <span
            class="text-[#8477fa] text-base font-medium ml-2 pt-[7px] pb-[29px]"
          >
            Publish Jobs
          </span>
        </a>
        <!-- <router-link to="/publish-jobs" class="pt-[13px] pb-[23px] ml-2">Publish Jobs</router-link> -->
      </div>
      <div class="flex gap-5">
        <a href="#" class="pt-[13px] pb-[23px]">
          <img :src="moon" alt="" class="w-5 h-5 fill-[#787777]" />
        </a>
        <a href="#" class="pt-[13px] pb-[23px]">
          <img :src="bell" alt="" class="w-5 h-5 fill-[#787777]" />
        </a>
        <a href="#" class="pt-0 pb-3">
          <div class="relative">
            <img
              class="h-10 w-10 rounded-full object-cover object-top"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
            />
            <span
              class="absolute bottom-0 left-7 h-[10px] w-[10px] rounded-full bg-[#30D137]"
            ></span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import bell from "../assets/images/bell.svg";
import moon from "../assets/images/moon.svg";
import logo from "../assets/images/jobs-logo.png";

export default {
  name: "nav-bar",
  components: {},
  data() {
    return {
      bell,
      moon,
      logo,
      navItems: [
        { title: "Home", url: "/" },
        { title: "Manage Jobs", url: "/manage-jobs" },
        { title: "Business", url: "/business" },
      ],
      centerItems: [
        { title: "IMG", url: "/image-logo" },
        { title: "Publish Jobs", url: "/publish-jobs" },
      ],
      extremeItems: [
        { title: "M", url: "/image-logo" },
        { title: "B", url: "/publish-jobs" },
        { title: "O", url: "/profile" },
      ],
    };
  },
};
</script>

<style scoped>
li:hover {
  scale: 1.1;
}

/* .router-link-active, */
.router-link-exact-active {
  background-color: #8477fa;
  border-radius: 5px;
  padding: 13px 21px 13px 21px;
  cursor: pointer;
  color: white;
}
</style>
