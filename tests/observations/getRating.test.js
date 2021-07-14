import { getRating } from "@sdgindex/data/observations";
import { addMockObservation } from "testHelpers/builders";

it("returns the rating color", () => {
  expect(getRating(addMockObservation({ rating: "green" }))).toEqual("green");
});
