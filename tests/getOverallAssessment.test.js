import { getOverallAssessment } from "@sdgindex/data";
import {
  addMockIndicators,
  addMockGoals,
  addMockOverallAssessment,
} from "testHelpers/builders";

it("returns the overall assessment", () => {
  const overallAssessment = addMockOverallAssessment();
  addMockGoals();
  addMockIndicators();

  expect(getOverallAssessment()).toEqual(overallAssessment);
});
