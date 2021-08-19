import { findSpilloverAssessment } from "@sdgindex/data";
import {
  addMockIndicators,
  addMockGoals,
  addMockOverallAssessment,
  addMockSpilloverAssessment,
} from "testHelpers/storeMocks";

it("returns the overall assessment", () => {
  const spilloverAssessment = addMockSpilloverAssessment();
  addMockOverallAssessment();
  addMockGoals();
  addMockIndicators();

  expect(findSpilloverAssessment()).toEqual(spilloverAssessment);
});
