import { isGoal } from "@sdgindex/data/assessments";
import { buildGoal, buildIndicator } from "testHelpers/builders";

it("returns true if assessment is a goal", () => {
  expect(isGoal(buildGoal())).toBe(true);
});

it("returns false if assessment is not a goal", () => {
  expect(isGoal(buildIndicator())).toBe(false);
});
