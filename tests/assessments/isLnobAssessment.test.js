import { isLnobAssessment } from "@sdgindex/data/assessments";
import { addMockGoal, addMockLnobAssessment } from "testHelpers/storeMocks";

it("returns true if assessment is overall SDG assessment", () => {
  expect(isLnobAssessment(addMockLnobAssessment())).toBe(true);
});

it("returns false if assessment is not overall SDG assessment", () => {
  expect(isLnobAssessment(addMockGoal())).toBe(false);
});
