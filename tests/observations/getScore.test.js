import { getScore } from "@sdgindex/data/observations";
import { buildObservation } from "testHelpers/builders";

it("returns the numeric score", () => {
  expect(getScore(buildObservation({ score: 75.3 }))).toEqual(75.3);
});
