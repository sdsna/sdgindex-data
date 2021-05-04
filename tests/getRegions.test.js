import { dataStore } from "./dataStore";
import { getRegionsByType } from "../src/getRegionsByType";

it("check if it returns all regions for a specific type", () => {
  expect(getRegionsByType(dataStore, "state").length).toEqual(50);
});
