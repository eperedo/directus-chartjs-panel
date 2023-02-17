<template>
  <div class="text" :class="{ 'has-header': showHeader }">
    <Pie v-if="showChart" :data="chartData" />
    <p v-else="!showChart">Loading...</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "vue-chartjs";

ChartJS.register(ArcElement, Tooltip, Legend);

export default defineComponent({
  data() {
    return {
      showChart: false,
      chartData: {
        labels: [],
        datasets: [
          {
            backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
            data: [],
          },
        ],
      },
    };
  },
  components: {
    Pie,
  },
  props: {
    showHeader: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: "",
    },
  },
  inject: ["api"],
  mounted() {
    this.api
      .get("/items/user?aggregate[count]=id&groupBy[]=country")
      .then((res: any) => {
        res.data.data.forEach((user: any) => {
          this.chartData.labels.push(user.country);
          this.chartData.datasets[0].data.push(user.count.id);
        });
        this.showChart = true;
      });
  },
});
</script>

<style scoped>
.text {
  padding: 12px;
}

.text.has-header {
  padding: 0 12px;
}
</style>
