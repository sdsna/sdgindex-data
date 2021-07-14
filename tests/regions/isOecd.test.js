import { isOecd } from "@sdgindex/data/regions";
import { addMockRegion } from "testHelpers/builders";

it("returns true if the region is a member of the OECD", () => {
  expect(isOecd(addMockRegion({ region: "OECD members" }))).toBe(true);
});

it("returns false if the region is not a member of the OECD", () => {
  expect(isOecd(addMockRegion({ region: "MENA" }))).toBe(false);
});
