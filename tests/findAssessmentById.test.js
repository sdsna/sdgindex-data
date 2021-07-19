import { findAssessmentById } from "@sdgindex/data";
import { addMockIndicator, addMockIndicators } from "testHelpers/storeMocks";

it("finds assessment with ID indicator1", () => {
  const indicator = addMockIndicator({ id: "indicator1" });
  addMockIndicators();

  expect(findAssessmentById("indicator1")).toEqual(indicator);
});
