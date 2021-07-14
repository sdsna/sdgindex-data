import { findTimeseriesByRegionAndAssessment } from "@sdgindex/data";
import {
  addMockIndicator,
  addMockRegion,
  addMockTimeseries,
  addMockMultipleTimeseries,
} from "testHelpers/builders";

it("returns the relevant timeseries", () => {
  const assessment = addMockIndicator();
  const region = addMockRegion();
  const timeseries = addMockTimeseries({ assessment, region });
  addMockMultipleTimeseries();

  expect(findTimeseriesByRegionAndAssessment(region, assessment)).toEqual(
    timeseries
  );
});
