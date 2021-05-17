import { dataStore } from "./dataStore";
import { getOverallAssessment } from "../src/getOverallAssessment";

it("check if overall assessment well returned", () => {
  const assessment = {
    id: "TOT",
    label: "Overall score",
    description:
      "The overall score measures a state’s total progress towards achieving all 17 SDGs. The score can be interpreted as a the percentage of SDG achievement. A score of 100 indicates that all SDGs have been achieved.",
    slug: "overall",
    type: "custom",
    dataId: "TOT",
  };

  expect(getOverallAssessment(dataStore)).toEqual(assessment);
});
