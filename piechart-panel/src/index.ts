import { definePanel } from "@directus/extensions-sdk";
import PanelComponent from "./panel.vue";

export default definePanel({
  id: "chartjs-pie",
  name: "ChartJs Pie",
  icon: "pie_chart",
  description: "A quick implementation of a pie with chartjs",
  component: PanelComponent,
  options: [
    {
      field: "text",
      name: "Text",
      type: "string",
      meta: {
        interface: "input",
        width: "full",
      },
    },
  ],
  minWidth: 16,
  minHeight: 16,
});
