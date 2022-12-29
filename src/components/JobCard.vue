<template>
  <div>
    <div class="my-[35px]">
      <div
        class="w-[830px] h-[234px] relative border border-[#8A8A8A] rounded-md py-[21px] px-[29px]"
      >
        <div class="flex">
          <div
            class="w-[60px] h-[60px] rounded-[10px] border-[2px] border-[#8477FA] p-[7px]"
          >
            <img src="" alt="" srcset="" />
          </div>
          <div class="flex flex-col ml-[13px] space-y-2">
            <h2 class="text-black text-2xl font-medium">{{ job.title }}</h2>
            <div class="flex gap-[9px]">
              <!-- TODO: Add a default image if no business logo-->
              <img :src="company" alt="" srcset="" class="w-5 h-5" />
              <p class="">{{ job.business.name }}</p>
              <img :src="link" alt="" srcset="" class="w-[15px] h-[15px]" />
            </div>
            <div class="flex gap-[9px]">
              <img :src="location" alt="" />
              <p class="flex text-sm gap-1">
                <span v-for="city in job.city_options" :key="city.uuid"
                  >{{ city.title }},</span
                >
                <span
                  v-for="country in job.country_options"
                  :key="country.uuid"
                  >{{ country.title }}</span
                >
              </p>
            </div>
          </div>
        </div>
        <div class="flex items-center mt-4 gap-[7px]">
          <!-- Display background color and icon image based on the status of the job application -->
          <div
            class="relative w-[30px] h-[30px] rounded-[5px] p-[5px]"
            :class="
              job.status.status === 'draft'
                ? 'bg-[#E4740C]'
                : '' || job.status.status === 'process'
                ? 'bg-[#787777]'
                : 'bg-[#8477FA]'
            "
          >
            <img
              v-if="job.status.status === 'process'"
              :src="process"
              alt=""
              class="w-5 h-5"
            />
            <img
              v-else-if="job.status.status === 'draft'"
              :src="incomplete"
              alt=""
              class="w-5 h-5"
            />
            <img v-else :src="persons" alt="" class="w-5 h-5" />
          </div>
          <p v-if="job.status.status === 'draft'" class="text-sm">
            <span class="text-[#E4740C]">In Complete</span> Please Complete your
            Application
          </p>
          <p v-else-if="job.status.status === 'process'" class="text-sm">
            Please wait while we review your job
          </p>
          <p v-else class="text-sm">
            {{ job.jobs_applied.length }}
            <span v-if="job.jobs_applied.length > 1">Applications</span>
            <span v-else>Application</span> Recieved
          </p>

          <img
            v-show="job.status.status !== 'process'"
            :src="link"
            alt=""
            srcset=""
            class="w-[15px] h-[15px]"
          />
        </div>
        <div class="flex justify-between mt-5 items-center">
          <div class="flex gap-2">
            <img :src="person" alt="" class="w-[15px] h-[15px]" />

            <!-- No "User" info from the API endpoint given -->
            <p class="text-xs">
              Posted by M. Ahmed
              <span class="text-[#8477FA]"> {{ timeago }} </span>
            </p>
          </div>
          <div v-if="job.status.status !== 'draft'" class="flex gap-[21px]">
            <button
              v-if="job.status.status !== 'process'"
              class="flex items-center gap-[10px] bg-[#8477FA] bg-opacity-20 rounded-[5px] p-[10px]"
            >
              <img :src="analytics" alt="" srcset="" class="h-5 w-5" />
              <p class="text-[#8477FA]">View Analytics</p>
            </button>
            <button
              class="flex items-center gap-[10px] bg-[#8477FA] rounded-[5px] p-[10px]"
              :class="
                (job.status.status === 'active' && disabled === false) ||
                job.status.status === 'process'
                  ? 'bg-[#8477FA]'
                  : 'bg-white border border-[#8477FA]' ||
                    (job.status.status === 'expired' && disabled === true) ||
                    (job.status.status === 'closed' && disabled === false)
                  ? 'bg-[#30D137] bg-opacity-20'
                  : 'bg-[#30D137] bg-opacity-20'
              "
            >
              <img
                v-if="job.status.status === 'active' && disabled === false"
                :src="campaign"
                alt=""
                srcset=""
                class="h-5 w-5"
              />
              <img
                v-if="
                  (job.status.status === 'expired' && disabled === true) ||
                  (job.status.status === 'closed' && disabled === false) ||
                  job.status.status === 'expired' ||
                  job.status.status === 'closed'
                "
                :src="renew"
                alt=""
                srcset=""
                class="h-5 w-5"
              />
              <img
                v-if="job.status.status === 'active' && disabled === true"
                :src="campaigned"
                alt=""
                srcset=""
                class="h-5 w-5"
              />
              <img
                v-if="job.status.status === 'process'"
                :src="status"
                alt=""
                srcset=""
                class="h-5 w-5"
              />

              <p
                v-if="job.status.status === 'active' && disabled === false"
                class="text-white"
              >
                Campaign now
              </p>
              <p
                v-if="
                  (job.status.status === 'expired' && disabled === true) ||
                  (job.status.status === 'closed' && disabled === false) ||
                  job.status.status === 'expired' ||
                  job.status.status === 'closed'
                "
                class="text-[#787777]"
              >
                Renew Job
              </p>
              <p
                v-if="job.status.status === 'active' && disabled === true"
                class="text-[#8477FA]"
              >
                Campaigned
              </p>
              <p v-if="job.status.status === 'process'" class="text-white">
                Check Status
              </p>
            </button>
          </div>
        </div>
        <div class="absolute right-[29px] top-[10px]">
          <p
            class="text-sm capitalize"
            :class="
              job.status.status === 'active'
                ? 'text-[#30D137]'
                : '' || job.status.status === 'draft'
                ? 'text-[#E4740C]'
                : '' || job.status.status === 'expired'
                ? 'text-[#F33939]'
                : '' || job.status.status === 'closed'
                ? 'text-black'
                : '' || job.status.status === 'process'
                ? 'text-[#8477FA]'
                : ''
            "
          >
            {{ job.status.status }}
          </p>
        </div>
        <div class="absolute flex items-center gap-2 right-[29px] top-9">
          <img
            v-if="job.status.status === 'draft'"
            :src="del"
            alt=""
            srcset=""
          />
          <div
            v-if="job.status.status === 'active' && disabled === true"
            class="mr-2"
          >
            <label for="" class="flex gap-3 items-center">
              <span class="text-xs text-[#787777] mr-3">Campaign Disabled</span>
              <input
                type="radio"
                v-model="disabled"
                :value="disabled"
                name=""
                id=""
                class="w-5 h-5 text-[#787777] checked:border checked:border-[#787777] checked:bg-[#787777]"
              />
            </label>
          </div>
          <div class="border border-[#787777] rounded-[5px] w-5 h-5 p-[3.33px]">
            <img :src="edit" alt="" srcset="" />
          </div>
        </div>
        <!-- Switch component -->
        <div
          v-if="
            job.status.status !== 'draft' && job.status.status !== 'process'
          "
          class="absolute right-[29px] top-24 flex gap-4 items-center"
        >
          <p v-if="disabled === false" class="text-xs">Disable Job</p>
          <p v-if="disabled === true" class="text-xs">Disabled</p>
          <div
            class="relative inline-block w-14 align-middle select-none transition duration-200 ease-in"
          >
            <div
              class="flex justify-between items-center"
              @click="disabled = !disabled"
            >
              <div
                class="w-[60px] h-[30px] rounded-[20px] flex items-center bg-[#787777] p-1 duration-300 ease-in-out"
                :class="{ 'bg-[#8477FA]': disabled }"
              >
                <div
                  class="bg-white w-[24px] h-[24px] rounded-full shadow-md transform duration-300 ease-in-out"
                  :class="{ 'translate-x-6': disabled }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import company from "@/assets/images/company-icon.png";
import link from "@/assets/images/link.png";
import location from "@/assets/images/location.png";
import persons from "@/assets/images/persons.png";
import person from "@/assets/images/person.png";
import analytics from "@/assets/images/analytics.png";
import campaign from "@/assets/images/campaign.png";
import edit from "@/assets/images/edit.png";
import incomplete from "@/assets/images/incomplete.png";
import process from "@/assets/images/process.png";
import renew from "@/assets/images/renew.png";
import del from "@/assets/images/delete.png";
import campaigned from "@/assets/images/campaigned.png";
import status from "@/assets/images/status.png";

export default {
  props: ["job"],
  computed: {
    // Get how long ago a post was created
    timeago() {
      return moment(this.job.created_at).fromNow();
    },
  },
  data: () => ({
    company,
    link,
    location,
    persons,
    person,
    analytics,
    campaign,
    edit,
    incomplete,
    process,
    renew,
    del,
    campaigned,
    status,
    disabled: false,
  }),
};
</script>

<style></style>
