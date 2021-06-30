import { addIndicator } from "@sdgindex/data/parse";
import { buildIndicator } from "testHelpers/builders";

it("add indicator to the dataStore", () => {
  const dataStore = { assessments: [] };
  const labelWithUnit = "Poverty headcount ratio at $1.90/day (%)";
  addIndicator(dataStore, {
    labelWithUnit,
    id: "sdg1_wpc",
    goalNumber: 1,
  });
  const indicator = buildIndicator({
    id: "sdg1_wpc",
    dataId: 1,
    goalNumber: 1,
    label: "Poverty headcount ratio at $1.90/day",
    slug: "poverty-headcount-ratio-at-1-90-day",
    unit: "%",
    type: "indicator",
  });

  delete indicator.description;
  expect(dataStore.assessments[0]).toEqual(indicator);
});
