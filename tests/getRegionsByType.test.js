import { getRegionsByType } from "@sdgindex/data";
import { addMockRegions } from "testHelpers/storeMocks";

let cities, countries;

beforeEach(() => {
  cities = addMockRegions({ type: "city" });
  countries = addMockRegions({ type: "country" });
});

it("returns cities", () => {
  expect(getRegionsByType("city")).toEqual(cities);
});

it("returns countries", () => {
  expect(getRegionsByType("country")).toEqual(countries);
});
