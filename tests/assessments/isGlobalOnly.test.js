import { isGlobalOnly } from "@sdgindex/data/assessments";
import { addMockIndicator } from "testHelpers/storeMocks";

it("returns true if the indicator is global only", () => {
  expect(
    isGlobalOnly(addMockIndicator({ isGlobal: true, isOECD: false }))
  ).toBe(true);
});

it("returns false if the indicator is global and OECD", () => {
  expect(isGlobalOnly(addMockIndicator({ isGlobal: true, isOECD: true }))).toBe(
    false
  );
});

it("returns false if the indicator is OECD only", () => {
  expect(
    isGlobalOnly(addMockIndicator({ isGlobal: false, isOECD: true }))
  ).toBe(false);
});
