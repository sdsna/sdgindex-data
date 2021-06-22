import { findAssessmentById } from "@sdgindex/data";
import { buildIndicator, buildIndicators } from "testHelpers/builders";

it("finds assessment with ID indicator1", () => {
  const indicator = buildIndicator({ id: "indicator1" });
  const dataStore = {
    assessments: [indicator, ...buildIndicators()],
  };

  expect(findAssessmentById(dataStore, "indicator1")).toEqual(indicator);
});
