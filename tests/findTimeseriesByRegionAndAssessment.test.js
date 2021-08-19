import { findTimeseriesByRegionAndAssessment } from "@sdgindex/data";
import {
  addMockOverallAssessment,
  addMockRegion,
  addMockIndicator,
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

describe("when the timeseries does not exist", () => {
  it("returns null", () => {
    const assessment = addMockIndicator();
    const region = addMockRegion();
    addMockMultipleTimeseries();

    expect(findTimeseriesByRegionAndAssessment(region, assessment)).toBe(null);
  });
});
