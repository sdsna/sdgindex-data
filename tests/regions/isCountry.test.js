import { isCountry } from "@sdgindex/data/regions";
import { addMockRegion } from "testHelpers/builders";

it("returns true if the region has type 'country'", () => {
  expect(isCountry(addMockRegion({ type: "country" }))).toBe(true);
});

it("returns false if the region has type 'state'", () => {
  expect(isCountry(addMockRegion({ type: "state" }))).toBe(false);
});
