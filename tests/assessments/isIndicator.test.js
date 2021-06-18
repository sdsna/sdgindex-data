import { isIndicator } from "@root/assessments";
import { buildGoal, buildIndicator } from "testHelpers/builders";

it("returns true if assessment is an indicator", () => {
  expect(isIndicator(buildIndicator())).toBe(true);
});

it("returns false if assessment is not an indicator", () => {
  expect(isIndicator(buildGoal())).toBe(false);
});
