import { getYearAsText } from "@sdgindex/data/observations";
import { buildObservation } from "testHelpers/builders";

it("returns the year as string", () => {
  expect(getYearAsText(buildObservation({ year: 2015 }))).toEqual("2015");
});

describe("when year is undefined", () => {
  it("returns the fallback string", () => {
    const observation = buildObservation({ year: null });
    expect(getYearAsText(observation)).toEqual("Year unavailable");
  });

  describe("with custom fallback string", () => {
    it("returns the custom fallback string", () => {
      const observation = buildObservation({ year: null });
      expect(getYearAsText(observation, "No year")).toEqual("No year");
    });
  });
});

describe("when value is undefined", () => {
  it("returns the fallback string", () => {
    const observation = buildObservation({ value: null });
    expect(getYearAsText(observation)).toEqual("Year unavailable");
  });

  describe("with custom fallback string", () => {
    it("returns the custom fallback string", () => {
      const observation = buildObservation({ value: null });
      expect(getYearAsText(observation, "No year")).toEqual("No year");
    });
  });
});
