import { getTimeseriesValue } from "@sdgindex/data/timeseries";
import { buildTimeseries } from "testHelpers/builders";

const timeseries = buildTimeseries({
  2000: 4.3,
  2012: 7.5,
  2021: null,
});

it("returns value for 2000", () => {
  expect(getTimeseriesValue(timeseries, 2000)).toEqual(4.3);
});

it("returns value for 2012", () => {
  expect(getTimeseriesValue(timeseries, 2012)).toEqual(7.5);
});

it("returns null for 2021", () => {
  expect(getTimeseriesValue(timeseries, 2021)).toEqual(null);
});
