import { isOecdOnly } from "@root/assessments";
import { buildIndicator } from "testHelpers/builders";

test("Returns true if the indicator is OECD only", () => {
  expect(isOecdOnly(buildIndicator({ isOECD: true, isGlobal: false }))).toBe(
    true
  );
});

test("Returns false if the indicator is global and OECD", () => {
  expect(isOecdOnly(buildIndicator({ isOECD: true, isGlobal: true }))).toBe(
    false
  );
});

test("Returns false if the indicator is global only", () => {
  expect(isOecdOnly(buildIndicator({ isOECD: false, isGlobal: true }))).toBe(
    false
  );
});

test("Returns false if the indicator is not global nor OECD", () => {
  expect(isOecdOnly(buildIndicator({ isOECD: false, isGlobal: false }))).toBe(
    false
  );
});
