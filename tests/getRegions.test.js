import { getRegions } from "@root";
import { buildRegions } from "testHelpers/builders";

const regions = buildRegions();
const dataStore = { regions };

it("returns all regions", () => {
  expect(getRegions(dataStore)).toEqual(regions);
});
