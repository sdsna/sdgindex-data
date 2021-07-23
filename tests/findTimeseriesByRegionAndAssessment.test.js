import { findTimeseriesByRegionAndAssessment } from "@sdgindex/data";
import {
  addMockOverallAssessment,
  addMockRegion,
  addMockTimeseries,
  addMockMultipleTimeseries,
} from "testHelpers/storeMocks";

it("returns the relevant timeseries", () => {
  const assessment = addMockOverallAssessment();
  const region = addMockRegion();
  const timeseries = addMockTimeseries({ assessment, region });
  addMockMultipleTimeseries();

  expect(findTimeseriesByRegionAndAssessment(region, assessment)).toEqual(
    timeseries
  );
});
