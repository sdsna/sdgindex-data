import { isTrendIndicator } from "@root/assessments";
import { buildIndicator } from "testHelpers/builders";

test("Returns true if the indicator is a trend indicator.", () => {
  expect(isTrendIndicator(buildIndicator({ hasTrend: true }))).toBe(true);
});

test("Returns false if the indicator is not a trend indicator.", () => {
  expect(isTrendIndicator(buildIndicator({ hasTrend: false }))).toBe(false);
});
