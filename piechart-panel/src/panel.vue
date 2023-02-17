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
            backgroundColor: [],
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
    collectionName: {
      type: String,
    },
    groupField: {
      type: String,
    },
    colors: {
      type: Array,
    },
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
    let url = `/items/${this.collectionName}?aggregate[count]=id&groupBy[]=${this.groupField}`;
    this.api.get(url).then((res: any) => {
      res.data.data.forEach((colObj: any) => {
        this.chartData.labels.push(colObj[this.groupField]);
        this.chartData.datasets[0].data.push(colObj.count.id);
        this.chartData.datasets[0].backgroundColor = Array.isArray(this.colors)
          ? this.colors
          : [];
      });
      this.showChart = true;
    });
  },
});
</script>

<style scoped>
.text {
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 12px;
}

.text.has-header {
  padding: 0 12px;
}
</style>
