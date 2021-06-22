import { isCountry } from "@sdgindex/data/regions";
import { buildRegion } from "testHelpers/builders";

it("returns true if the region has type 'country'", () => {
  expect(isCountry(buildRegion({ type: "country" }))).toBe(true);
});

it("returns false if the region has type 'state'", () => {
  expect(isCountry(buildRegion({ type: "state" }))).toBe(false);
});
