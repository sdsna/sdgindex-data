import { getYearAsText } from "@sdgindex/data/observations";
import { addMockObservation } from "testHelpers/builders";

it("returns the year as string", () => {
  expect(getYearAsText(addMockObservation({ year: 2015 }))).toEqual("2015");
});

describe("when year is undefined", () => {
  it("returns the fallback string", () => {
    const observation = addMockObservation({ year: null });
    expect(getYearAsText(observation)).toEqual("Year unavailable");
  });

  describe("with custom fallback string", () => {
    it("returns the custom fallback string", () => {
      const observation = addMockObservation({ year: null });
      expect(getYearAsText(observation, "No year")).toEqual("No year");
    });
  });
});

describe("when value is undefined", () => {
  it("returns the fallback string", () => {
    const observation = addMockObservation({ value: null });
    expect(getYearAsText(observation)).toEqual("Year unavailable");
  });

  describe("with custom fallback string", () => {
    it("returns the custom fallback string", () => {
      const observation = addMockObservation({ value: null });
      expect(getYearAsText(observation, "No year")).toEqual("No year");
    });
  });
});
