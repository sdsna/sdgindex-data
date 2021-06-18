import { isGlobalOnly } from "@root/assessments";
import { buildIndicator } from "testHelpers/builders";

test("Returns true if the indicator is global only", () => {
  expect(isGlobalOnly(buildIndicator({ isGlobal: true, isOECD: false }))).toBe(
    true
  );
});

test("Returns false if the indicator is global and OECD", () => {
  expect(isGlobalOnly(buildIndicator({ isGlobal: true, isOECD: true }))).toBe(
    false
  );
});

test("Returns false if the indicator is OECD only", () => {
  expect(isGlobalOnly(buildIndicator({ isGlobal: false, isOECD: true }))).toBe(
    false
  );
});

test("Returns false if the indicator is not global nor OECD", () => {
  expect(isGlobalOnly(buildIndicator({ isGlobal: false, isOECD: false }))).toBe(
    false
  );
});
