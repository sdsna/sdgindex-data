import { getFirstYear } from "@sdgindex/data/timeseries";
import { addMockTimeseries } from "testHelpers/storeMocks";

it("returns first year with non-null value", () => {
  expect(
    getFirstYear(
      addMockTimeseries({
        dataPoints: [
          {
            year: 2002,
            value: null,
          },
          {
            year: 2004,
            value: 5.27,
          },
          {
            year: 2006,
            value: 5.18,
          },
        ],
      })
    )
  ).toEqual(2004);
});
