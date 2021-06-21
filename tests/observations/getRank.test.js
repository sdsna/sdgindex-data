import { getRank } from "@root/observations";
import { buildObservation } from "testHelpers/builders";

it("returns the numeric rank", () => {
  expect(getRank(buildObservation({ rank: 238 }))).toEqual(238);
});
