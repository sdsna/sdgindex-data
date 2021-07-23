import { getValue } from "@sdgindex/data/observations";
import { addMockObservation } from "testHelpers/storeMocks";

it("returns the numeric value", () => {
  expect(getValue(addMockObservation({ value: 128.73 }))).toEqual(128.73);
});
