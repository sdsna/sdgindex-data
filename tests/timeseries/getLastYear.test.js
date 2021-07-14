import { getLastYear } from "@sdgindex/data/timeseries";
import { addMockTimeseries } from "testHelpers/builders";

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
