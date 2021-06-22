import { getLastYear } from "@sdgindex/data/timeseries";
import { buildTimeseries } from "testHelpers/builders";

it("returns last year with non-null value", () => {
  expect(
    getLastYear(
      buildTimeseries({
        2016: 13.3,
        2017: null,
        2018: 5.4,
        2019: null,
        2020: null,
        2021: null,
      })
    )
  ).toEqual(2018);
});
