import { getRating } from "@root/observations";
import { buildObservation } from "testHelpers/builders";

it("returns the rating color", () => {
  expect(getRating(buildObservation({ rating: "green" }))).toEqual("green");
});
