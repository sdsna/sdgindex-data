import { isImputed } from "@sdgindex/data/observations";
import { addMockObservation } from "testHelpers/storeMocks";

it("returns true if imputed", () => {
  expect(isImputed(addMockObservation({ isImputed: true }))).toEqual(true);
});

it("returns false if not imputed", () => {
  expect(isImputed(addMockObservation())).toEqual(false);
  expect(isImputed(addMockObservation({ isImputed: false }))).toEqual(false);
});

describe("when isImputed is not defined", () => {
  it("returns false", () => {
    expect(isImputed({})).toBe(false);
  });
});
