import { getOverallAssessment } from "@sdgindex/data";
import {
  addMockIndicators,
  addMockGoals,
  addMockOverallAssessment,
} from "testHelpers/storeMocks";

it("returns the overall assessment", () => {
  const overallAssessment = addMockOverallAssessment();
  addMockGoals();
  addMockIndicators();

  expect(getOverallAssessment()).toEqual(overallAssessment);
});
