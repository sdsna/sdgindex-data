import { findRegionById } from "@sdgindex/data";
import { buildRegion, buildRegions } from "testHelpers/builders";

it("finds region with ID 'REGION_1'", () => {
  const region = buildRegion({ id: "REGION_1" });
  const dataStore = {
    regions: [region, ...buildRegions()],
  };

  expect(findRegionById(dataStore, "REGION_1")).toEqual(region);
});
