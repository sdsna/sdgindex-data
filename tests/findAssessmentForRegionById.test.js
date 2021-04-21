import { dataStore } from "./dataStore";
import { findAssessmentForRegionById } from "@root";
import { findGoalForRegionById } from "../src/findGoalForRegionById";

it("check if add well dataId if it's not there", () => {
  let assessment = {
    id: "sdg13v3_GHGemissions",
    v: 22.36,
    c: "red",
    dataId: 67,
    goalNumber: 13,
    slug: "sdg13v3_GHGemissions",
    label: "Greenhouse Gas Emissions",
    unit: "metric tons of CO2 per capita",
    description:
      "Metric tons of energy-related carbon dioxide (CO2) emissions per capita",
    type: "indicator",
    year: "2017",
    longTermObjective: 1.5,
    reference: "EIA",
  };
  let region = {
    id: "AL",
    dataId: 43,
    slug: "alabama",
    name: "Alabama",
    type: "state",
  };
  // expect(
  //   findAssessmentForRegionById(
  //     dataStore,
  //     region,
  //     "sdg13v3_GHGemissions"
  //   ).toEqual(assessment)
  // );
});
