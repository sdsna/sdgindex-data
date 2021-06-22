import { isGlobalOnly } from "@root/assessments";
import { buildIndicator } from "testHelpers/builders";

it("returns true if the indicator is global only", () => {
  expect(isGlobalOnly(buildIndicator({ isGlobal: true, isOECD: false }))).toBe(
    true
  );
});

it("returns false if the indicator is global and OECD", () => {
  expect(isGlobalOnly(buildIndicator({ isGlobal: true, isOECD: true }))).toBe(
    false
  );
});

it("returns false if the indicator is OECD only", () => {
  expect(isGlobalOnly(buildIndicator({ isGlobal: false, isOECD: true }))).toBe(
    false
  );
});
