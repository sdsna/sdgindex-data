import { getRating } from "@sdgindex/data/observations";
import { addMockObservation } from "testHelpers/storeMocks";

it("returns green", () => {
  expect(getRating(addMockObservation({ rating: "green" }))).toEqual("green");
});

it("returns gray", () => {
  expect(getRating(addMockObservation({ rating: "gray" }))).toEqual("gray");
});

describe("when rating is not defined", () => {
  it("returns null", () => {
    expect(getRating({})).toBe(null);
  });
});
