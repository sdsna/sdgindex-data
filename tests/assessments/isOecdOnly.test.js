import { isOecdOnly } from "@root/assessments";
import { buildIndicator } from "testHelpers/builders";

it("returns true if the indicator is OECD only", () => {
  expect(isOecdOnly(buildIndicator({ isOECD: true, isGlobal: false }))).toBe(
    true
  );
});

it("returns false if the indicator is global and OECD", () => {
  expect(isOecdOnly(buildIndicator({ isOECD: true, isGlobal: true }))).toBe(
    false
  );
});

it("returns false if the indicator is global only", () => {
  expect(isOecdOnly(buildIndicator({ isOECD: false, isGlobal: true }))).toBe(
    false
  );
});
