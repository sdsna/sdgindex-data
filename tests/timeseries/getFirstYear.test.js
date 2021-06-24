import { getFirstYear } from "@sdgindex/data/timeseries";
import { buildTimeseries } from "testHelpers/builders";

it("returns first year with non-null value", () => {
  expect(
    getFirstYear(
      buildTimeseries({
        2000: null,
        2001: null,
        2002: null,
        2003: null,
        2004: 5.27,
        2005: null,
        2006: 5.18,
      })
    )
  ).toEqual(2004);
});
