import { isTrendIndicator } from "@sdgindex/data/assessments";
import { addMockIndicator } from "testHelpers/builders";

it("returns true if the indicator is a trend indicator", () => {
  expect(isTrendIndicator(addMockIndicator({ hasTrend: true }))).toBe(true);
});

it("returns false if the indicator is not a trend indicator", () => {
  expect(isTrendIndicator(addMockIndicator({ hasTrend: false }))).toBe(false);
});
