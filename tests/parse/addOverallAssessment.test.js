import { addOverallAssessment } from "@sdgindex/data/parse";
import { buildOverallAssessment } from "testHelpers/builders";

it("add the overall assessment to the dataStore", () => {
  const dataStore = { assessments: [] };
  addOverallAssessment(dataStore);
  expect(dataStore.assessments[0]).toEqual(
    buildOverallAssessment({
      dataId: "TOT",
      label: "Overall score",
      description:
        "The overall score measures a country's total progress towards achieving all 17 SDGs. The score can be interpreted as a percentage of SDG achievement. A score of 100 indicates that all SDGs have been achieved.",
    })
  );
});
