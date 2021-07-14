import { getTimeseriesValue } from "@sdgindex/data/timeseries";
import { addMockTimeseries } from "testHelpers/builders";

let timeseries;

beforeEach(() => {
  timeseries = addMockTimeseries({
    dataPoints: [
      {
        year: 2000,
        value: 4.3,
      },
      {
        year: 2012,
        value: 7.5,
      },
      {
        year: 2021,
        value: null,
      },
    ],
  });
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
