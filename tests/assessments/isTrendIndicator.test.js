import { isTrendIndicator } from "@sdgindex/data/assessments";
import { buildIndicator } from "testHelpers/builders";

it("returns true if the indicator is a trend indicator", () => {
  expect(isTrendIndicator(buildIndicator({ hasTrend: true }))).toBe(true);
});

it("returns false if the indicator is not a trend indicator", () => {
  expect(isTrendIndicator(buildIndicator({ hasTrend: false }))).toBe(false);
});
