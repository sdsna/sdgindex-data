import { isSpilloverAssessment } from "@root/assessments";
import { buildIndicator } from "testHelpers/builders";

test("Returns true if the indicator is a spillover indicator", () => {
  expect(isSpilloverAssessment(buildIndicator({ id: "SPI" }))).toBe(true);
});

test("Returns false if the indicator is not a spillover indicator", () => {
  expect(isSpilloverAssessment(buildIndicator({ id: "Overall" }))).toBe(false);
});
