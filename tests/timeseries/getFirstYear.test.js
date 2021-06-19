import { getFirstYear } from "@root/timeseries";
import { buildObservation } from "testHelpers/builders";

test("Returns the first year where the timeseries has value for the given assessment", () => {
  expect(
    getFirstYear(
      buildObservation({
        v: [
          83.45, 83.37, 83.6, 83.28, 83.39, 84, 83.5, 83.57, 83.89, 85.36, 85.3,
          85.55, 85.9, 85.91, 86.04, 85.92, 85.79, 85.85, 85.53, 85.79, 85.89,
          85.89,
        ],
      })
    )
  ).toEqual(2000);
});
