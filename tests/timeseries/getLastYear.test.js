import { getLastYear } from "@sdgindex/data/timeseries";
import { addMockTimeseries } from "testHelpers/storeMocks";

it("returns last year with non-null value", () => {
  expect(
    getLastYear(
      addMockTimeseries({
        dataPoints: [
          {
            year: 2016,
            value: 13.3,
          },
          {
            year: 2018,
            value: 0,
          },
          {
            year: 2021,
            value: null,
          },
        ],
      })
    )
  ).toEqual(2018);
});

describe("when timeseries consists of a single data point", () => {
  it("returns last year correctly", () => {
    expect(
      getLastYear(addMockTimeseries({ dataPoints: [{ year: 1992, value: 3 }] }))
    ).toEqual(1992);
  });
});
