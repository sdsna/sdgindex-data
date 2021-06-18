import { isImputed } from "@root/observations";
import { buildObservation } from "testHelpers/builders";

it("returns true if imputed", () => {
  expect(isImputed(buildObservation({ imputed: true }))).toEqual(true);
});

it("returns false if not imputed", () => {
  expect(isImputed(buildObservation())).toEqual(false);
});
