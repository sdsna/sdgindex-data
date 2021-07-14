import { isGoal } from "@sdgindex/data/assessments";
import { addMockGoal, addMockIndicator } from "testHelpers/builders";

it("returns true if assessment is a goal", () => {
  expect(isGoal(addMockGoal())).toBe(true);
});

it("returns false if assessment is not a goal", () => {
  expect(isGoal(addMockIndicator())).toBe(false);
});
