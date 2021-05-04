import { dataStore } from "./dataStore";
import { getOverallAssessmentForRegion } from "../src/getOverallAssessmentForRegion";

it("check if overall assessment well returnedfor a specific region", () => {
  const assessment = {
    id: "TOT",
    label: "Overall score",
    description:
      "The overall score measures a state’s total progress towards achieving all 17 SDGs. The score can be interpreted as a the percentage of SDG achievement. A score of 100 indicates that all SDGs have been achieved.",
    c: "red",
    r: 43,
    s: 28.62,
    slug: "overall",
    type: "custom",
    dataId: "TOT",
  };
  const region = {
    id: "AL",
    dataId: 43,
    slug: "alabama",
    name: "Alabama",
    type: "state",
  };

  expect(getOverallAssessmentForRegion(dataStore, region)).toEqual(assessment);
});
