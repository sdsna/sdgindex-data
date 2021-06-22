import { isOverallAssessment } from "@sdgindex/data/assessments";
import { buildGoal, buildOverallAssessment } from "testHelpers/builders";

it("returns true if assessment is overall SDG assessment", () => {
  expect(isOverallAssessment(buildOverallAssessment())).toBe(true);
});

it("returns false if assessment is not overall SDG assessment", () => {
  expect(isOverallAssessment(buildGoal())).toBe(false);
});
