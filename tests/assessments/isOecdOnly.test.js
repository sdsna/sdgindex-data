import { isOecdOnly } from "@sdgindex/data/assessments";
import { addMockIndicator } from "testHelpers/builders";

it("returns true if the indicator is OECD only", () => {
  expect(isOecdOnly(addMockIndicator({ isOECD: true, isGlobal: false }))).toBe(
    true
  );
});

it("returns false if the indicator is global and OECD", () => {
  expect(isOecdOnly(addMockIndicator({ isOECD: true, isGlobal: true }))).toBe(
    false
  );
});

it("returns false if the indicator is global only", () => {
  expect(isOecdOnly(addMockIndicator({ isOECD: false, isGlobal: true }))).toBe(
    false
  );
});
