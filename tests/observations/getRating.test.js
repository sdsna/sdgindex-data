import { getRating } from "@sdgindex/data/observations";
import { addMockObservation } from "testHelpers/storeMocks";

it("returns the rating color", () => {
  expect(getRating(addMockObservation({ rating: "green" }))).toEqual("green");
});

describe("when rating is not defined", () => {
  it("returns null", () => {
    expect(getRating({})).toBe(null);
  });
});
