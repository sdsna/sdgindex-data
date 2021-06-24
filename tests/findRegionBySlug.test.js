import { findRegionBySlug } from "@sdgindex/data";
import { buildRegion, buildRegions } from "testHelpers/builders";

it("finds region with slug 'my-region'", () => {
  const region = buildRegion({ slug: "my-region" });
  const dataStore = {
    regions: [region, ...buildRegions()],
  };

  expect(findRegionBySlug(dataStore, "my-region")).toEqual(region);
});
