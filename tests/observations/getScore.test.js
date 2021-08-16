import { getScore } from "@sdgindex/data/observations";
import { addMockObservation } from "testHelpers/storeMocks";

it("returns the numeric score", () => {
  expect(getScore(addMockObservation({ score: 75.3 }))).toEqual(75.3);
});

describe("when score is not defined", () => {
  it("returns null", () => {
    expect(getScore({})).toBe(null);
  });
});
