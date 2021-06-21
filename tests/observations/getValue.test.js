import { getValue } from "@root/observations";
import { buildObservation } from "testHelpers/builders";

it("returns the numeric value", () => {
  expect(getValue(buildObservation({ value: 128.73 }))).toEqual(128.73);
});
