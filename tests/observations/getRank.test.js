import { getRank } from "@sdgindex/data/observations";
import { buildObservation } from "testHelpers/builders";

it("returns the numeric rank", () => {
  expect(getRank(buildObservation({ rank: 238 }))).toEqual(238);
});
