import { findTimeseriesByRegionAndAssessment } from "@root";
import {
  buildOverallAssessment,
  buildRegion,
  buildTimeseries,
  buildMultipleTimeseries,
} from "testHelpers/builders";

const assessment = buildOverallAssessment();
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
