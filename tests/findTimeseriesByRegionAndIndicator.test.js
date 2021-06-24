import { findTimeseriesByRegionAndAssessment } from "@sdgindex/data";
import {
  buildIndicator,
  buildRegion,
  buildTimeseries,
  buildMultipleTimeseries,
} from "testHelpers/builders";

const assessment = buildIndicator();
const region = buildRegion();
const timeseries = buildTimeseries({ assessment, region });
const dataStore = {
  timeseries: [timeseries, ...buildMultipleTimeseries()],
};

it("returns the relevant timeseries", () => {
  expect(
    findTimeseriesByRegionAndAssessment(dataStore, region, assessment)
  ).toEqual(timeseries);
});
