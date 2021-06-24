import { observationObjectToArray } from "@sdgindex/data/observations";
import { buildObservation } from "testHelpers/builders";

it("converts observation to array", () => {
  expect(
    observationObjectToArray(
      buildObservation({
        value: 238,
        year: 2019,
        rating: "red",
        score: 33,
        rank: 239,
      })
    )
  ).toEqual([238, 2019, "red", 33, 239]);
});

describe("when score and rank are undefined", () => {
  it("does not add trailing null values", () => {
    expect(
      observationObjectToArray(
        buildObservation({
          value: 238,
          year: 2019,
          rating: "red",
          score: undefined,
          rank: null,
        })
      )
    ).toEqual([238, 2019, "red"]);
  });
});

describe("when year is undefined", () => {
  it("adds intermediate null value", () => {
    expect(
      observationObjectToArray(
        buildObservation({
          value: 238,
          year: null,
          rating: "red",
          score: null,
          rank: null,
        })
      )
    ).toEqual([238, null, "red"]);
  });
});
