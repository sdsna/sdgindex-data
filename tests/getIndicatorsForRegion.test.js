import { dataStore } from "./dataStore";
import { getIndicatorsForRegion } from "../src/getIndicatorsForRegion";
import { findIndicatorForRegionBySlug } from "../src/findIndicatorForRegionBySlug";

it("check if get getIndicatorsForRegion return all indicators for a specific region", () => {
  const region = {
    id: "AL",
    dataId: 43,
    slug: "alabama",
    name: "Alabama",
    type: "state",
  };
  expect(getIndicatorsForRegion(dataStore, region).length).toEqual(79);
  getIndicatorsForRegion(dataStore, region).map((indicator) =>
    expect(indicator).toEqual(
      findIndicatorForRegionBySlug(dataStore, region, indicator.slug)
    )
  );
});
