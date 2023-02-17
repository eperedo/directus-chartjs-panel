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
      field: "collectionName",
      name: "Collection",
      meta: {
        interface: "system-collection",
        width: "half",
      },
    },
    {
      field: "groupField",
      name: "Field",
      meta: {
        interface: "system-field",
        width: "half",
        options: {
          collectionField: "collectionName",
        },
      },
    },
    {
      field: "colors",
      name: "Select colors",
      meta: {
        width: "full",
        interface: "select-multiple-dropdown",
        options: {
          choices: [
            { text: "Red", value: "red" },
            { text: "Blue", value: "blue" },
            { text: "Green", value: "green" },
          ],
          allowOther: true,
        },
      },
    },
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
