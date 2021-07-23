import { findRegionById } from "@sdgindex/data";
import { addMockRegion, addMockRegions } from "testHelpers/storeMocks";

it("finds region with ID 'REGION_1'", () => {
  const region = addMockRegion({ id: "REGION_1" });
  addMockRegions();

  expect(findRegionById("REGION_1")).toEqual(region);
});
