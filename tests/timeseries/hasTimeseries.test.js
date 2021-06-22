import { hasTimeseries } from "@root/timeseries";
import { buildObservation, buildTimeseries } from "testHelpers/builders";

it("returns true if the object has timeseries", () => {
  expect(hasTimeseries(buildTimeseries())).toBe(true);
});

it("returns false if the object does not have timeseries", () => {
  expect(hasTimeseries(buildObservation())).toBe(false);
});
