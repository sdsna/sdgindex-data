import { isCountry } from "@sdgindex/data/regions";
import { addMockRegion } from "testHelpers/storeMocks";

it("returns true if the region has type 'country'", () => {
  expect(isCountry(addMockRegion({ type: "country" }))).toBe(true);
});

it("returns false if the region has type 'state'", () => {
  expect(isCountry(addMockRegion({ type: "state" }))).toBe(false);
});
