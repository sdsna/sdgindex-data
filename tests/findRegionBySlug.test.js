import { findRegionBySlug, store } from "@sdgindex/data";
import { addMockRegion, addMockRegions } from "testHelpers/storeMocks";

it("finds region with slug 'my-region'", () => {
  const region = addMockRegion({ slug: "my-region" });
  addMockRegions();

  expect(findRegionBySlug("my-region")).toEqual(region);
});
