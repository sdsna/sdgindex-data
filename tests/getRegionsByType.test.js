import { getRegionsByType } from "@sdgindex/data";
import { buildRegions } from "testHelpers/builders";

const cities = buildRegions({ type: "city" });
const countries = buildRegions({ type: "country" });
const dataStore = { regions: [...cities, ...countries] };

it("returns cities", () => {
  expect(getRegionsByType(dataStore, "city")).toEqual(cities);
});

it("returns countries", () => {
  expect(getRegionsByType(dataStore, "country")).toEqual(countries);
});
