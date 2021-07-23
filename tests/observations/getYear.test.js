import { getYear } from "@sdgindex/data/observations";
import { addMockObservation } from "testHelpers/storeMocks";

it("returns the numeric year", () => {
  expect(getYear(addMockObservation({ year: 2016 }))).toEqual(2016);
});
