import { isOecd } from "@root/regions";
import { buildRegion } from "testHelpers/builders";

it("returns true if the region is a member of the OECD", () => {
  expect(isOecd(buildRegion({ region: "OECD members" }))).toBe(true);
});

it("returns false if the region is not a member of the OECD", () => {
  expect(isOecd(buildRegion({ region: "MENA" }))).toBe(false);
});
