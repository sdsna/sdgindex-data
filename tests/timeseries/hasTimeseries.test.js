import { hasTimeseries } from "@sdgindex/data/timeseries";
import { addMockObservation, addMockTimeseries } from "testHelpers/storeMocks";

it("returns true if the object has timeseries", () => {
  expect(hasTimeseries(addMockTimeseries())).toBe(true);
});

it("returns false if the object does not have timeseries", () => {
  expect(hasTimeseries(addMockObservation())).toBe(false);
});
