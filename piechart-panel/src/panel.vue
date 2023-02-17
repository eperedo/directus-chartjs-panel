<template>
  <div class="text" :class="{ 'has-header': showHeader }">
    <Pie :data="chartData" />
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
      chartData: {
        labels: ["Perú", "Spain", "Rusia"],
        datasets: [
          {
            backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
            data: [40, 20, 80],
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
