import { isIndicator } from "@sdgindex/data/assessments";
import { addMockGoal, addMockIndicator } from "testHelpers/storeMocks";

it("returns true if assessment is an indicator", () => {
  expect(isIndicator(addMockIndicator())).toBe(true);
});

it("returns false if assessment is not an indicator", () => {
  expect(isIndicator(addMockGoal())).toBe(false);
});
