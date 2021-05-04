import { dataStore } from "./dataStore";
import { getRegions } from "../src/getRegions";

it("check if it returns all regions", () => {
  expect(getRegions(dataStore).length).toEqual(50);
});
