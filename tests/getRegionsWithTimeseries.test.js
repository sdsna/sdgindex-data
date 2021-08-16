import { omit } from "lodash";
import { getRegionsWithTimeseries } from "@sdgindex/data";
import {
  addMockIndicator,
  addMockTimeseries,
  addMockRegions,
} from "testHelpers/storeMocks";

let regions, indicator, timeseries;

beforeEach(() => {
  regions = addMockRegions();
  indicator = addMockIndicator();
  timeseries = regions.map((region) =>
    addMockTimeseries({ region, assessment: indicator })
  );

  // Add timeseries for other indicators
  regions.forEach((region) => addMockTimeseries({ region }));
});

it("returns all regions", () => {
  expect(getRegionsWithTimeseries(indicator)).toMatchObject(regions);
});

it("includes timeseries for each region", () => {
  expect(getRegionsWithTimeseries(indicator)).toMatchObject(
    timeseries.map((series) => omit(series, "id"))
  );
});
