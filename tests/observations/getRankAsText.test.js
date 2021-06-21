import { getRankAsText } from "@root/observations";
import { buildObservation } from "testHelpers/builders";

it("returns the rank as string", () => {
  expect(getRankAsText(buildObservation({ rank: 10 }))).toEqual("10");
});

describe("when rank is undefined", () => {
  it("returns the fallback string", () => {
    const observation = buildObservation({ rank: null });
    expect(getRankAsText(observation)).toEqual("Not ranked");
  });

  describe("with custom fallback string", () => {
    it("returns the custom fallback string", () => {
      const observation = buildObservation({ rank: null });
      expect(getRankAsText(observation, "No rank")).toEqual("No rank");
    });
  });
});
