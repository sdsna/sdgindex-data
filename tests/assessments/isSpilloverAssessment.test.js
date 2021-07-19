import { isSpilloverAssessment } from "@sdgindex/data/assessments";
import {
  addMockOverallAssessment,
  addMockSpilloverAssessment,
} from "testHelpers/storeMocks";

it("returns true if assessment is overall spillover index assessment", () => {
  expect(isSpilloverAssessment(addMockSpilloverAssessment())).toBe(true);
});

it("returns false if assessment is not overall spillover index assessment", () => {
  expect(isSpilloverAssessment(addMockOverallAssessment())).toBe(false);
});
