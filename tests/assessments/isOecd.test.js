import { isOecd } from "@root/assessments";
import { buildRegion } from "testHelpers/builders";

it("Returns true if the region is a member of the OECD", () => {
  expect(isOecd(buildRegion({ region: "OECD members" }))).toBe(true);
});

it("Returns false if the region is a member of the OECD", () => {
  expect(isOecd(buildRegion({ region: "MENA" }))).toBe(false);
});
