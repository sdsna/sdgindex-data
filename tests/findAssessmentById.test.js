import { dataStore } from "./dataStore";
import { findAssessmentById } from "@root";

it("check if add well dataId if it's not there", () => {
  let assessment = {
    id: "sdg13v3_GHGemissions",
    goalNumber: 13,
    slug: "sdg13v3_GHGemissions",
    label: "Greenhouse Gas Emissions",
    unit: "metric tons of CO2 per capita",
    dataId: 67,
    description:
      "Metric tons of energy-related carbon dioxide (CO2) emissions per capita",
    type: "indicator",
    year: "2017",
    longTermObjective: 1.5,
    reference: "EIA",
  };
  expect(findAssessmentById(dataStore, "sdg13v3_GHGemissions")).toEqual(
    assessment
  );
});
