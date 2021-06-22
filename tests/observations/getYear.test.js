import { getYear } from "@sdgindex/data/observations";
import { buildObservation } from "testHelpers/builders";

it("returns the numeric year", () => {
  expect(getYear(buildObservation({ year: 2016 }))).toEqual(2016);
});
