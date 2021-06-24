import { isSpilloverAssessment } from "@sdgindex/data/assessments";
import {
  buildOverallAssessment,
  buildSpilloverAssessment,
} from "testHelpers/builders";

it("returns true if assessment is overall spillover index assessment", () => {
  expect(isSpilloverAssessment(buildSpilloverAssessment())).toBe(true);
});

it("returns false if assessment is not overall spillover index assessment", () => {
  expect(isSpilloverAssessment(buildOverallAssessment())).toBe(false);
});
