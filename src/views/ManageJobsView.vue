<template>
  <div class="mx-6">
    <Header />
    <Search />
    <Card v-for="job in jobs" :key="job.uuid" :job="job" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Header from "@/components/ManageJobsHeader.vue";
import Search from "@/components/ManageJobsSearchBar.vue";
import Card from "@/components/JobCard.vue";

export default {
  components: {
    Header,
    Search,
    Card,
  },
  data: () => ({
    data: [],
  }),
  created() {
    this.getJobs();
  },
  computed: {
    ...mapState({
      jobs: (state) => state.jobs.data,
    }),
    // jobs() {
    //   return this.$store.state.jobs.data;
    // },
  },
  methods: {
    ...mapActions(["getJobs"]),
  },
};
</script>

<style></style>
