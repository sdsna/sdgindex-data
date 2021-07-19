import { isOverallAssessment } from "@sdgindex/data/assessments";
import { addMockGoal, addMockOverallAssessment } from "testHelpers/storeMocks";

it("returns true if assessment is overall SDG assessment", () => {
  expect(isOverallAssessment(addMockOverallAssessment())).toBe(true);
});

it("returns false if assessment is not overall SDG assessment", () => {
  expect(isOverallAssessment(addMockGoal())).toBe(false);
});
