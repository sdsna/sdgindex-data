import { omit } from "lodash";
import { getRegionsWithTimeseries } from "@sdgindex/data";
import {
  buildIndicator,
  buildIndicators,
  buildTimeseries,
  buildMultipleTimeseries,
  buildRegions,
} from "testHelpers/builders";

const regions = buildRegions();
const indicator = buildIndicator();
const timeseries = regions.map((region) =>
  buildTimeseries({ region, assessment: indicator })
);
const dataStore = {
  assessments: [indicator, ...buildIndicators()],
  regions,
  timeseries: [...timeseries, ...buildMultipleTimeseries()],
};

it("returns all regions", () => {
  expect(getRegionsWithTimeseries(dataStore, indicator)).toMatchObject(regions);
});

it("includes timeseries for each region", () => {
  expect(getRegionsWithTimeseries(dataStore, indicator)).toMatchObject(
    timeseries.map((series) => omit(series, "id"))
  );
});
