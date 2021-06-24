import { getScoreAsText } from "@sdgindex/data/observations";
import { buildObservation } from "testHelpers/builders";

it("returns the score as string with two decimals", () => {
  expect(getScoreAsText(buildObservation({ score: 55 }))).toEqual("55.00");
});

describe("with custom precision", () => {
  it("returns score with one decimal", () => {
    const observation = buildObservation({ score: 73.575 });
    expect(getScoreAsText(observation, 1)).toEqual("73.6");
  });
});

describe("when score is undefined", () => {
  it("returns the fallback string", () => {
    const observation = buildObservation({ score: null });
    expect(getScoreAsText(observation)).toEqual("Not scored");
  });

  describe("with custom fallback string", () => {
    it("returns the custom fallback string", () => {
      const observation = buildObservation({ score: null });
      expect(getScoreAsText(observation, 2, "SCORE: N/A")).toEqual(
        "SCORE: N/A"
      );
    });
  });
});
