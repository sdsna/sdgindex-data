import { dataStore } from "./dataStore";
import { findAssessmentBySlug } from "@root";

it("check if find well assessment by Slug", () => {
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
  findAssessmentBySlug(dataStore, "sdg13v3_GHGemissions");
  expect(findAssessmentBySlug(dataStore, "sdg13v3_GHGemissions")).toEqual(
    assessment
  );
});
