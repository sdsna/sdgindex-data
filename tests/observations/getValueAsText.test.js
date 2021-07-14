import { getValueAsText } from "@sdgindex/data/observations";
import { addMockObservation } from "testHelpers/builders";

it("returns the value as string with two decimals", () => {
  expect(getValueAsText(addMockObservation({ value: 272.183 }))).toEqual(
    "272.18"
  );
});

describe("with custom precision", () => {
  it("returns value with one decimal", () => {
    const observation = addMockObservation({ value: 4.9999 });
    expect(getValueAsText(observation, 1)).toEqual("5.0");
  });
});

describe("when value is undefined", () => {
  it("returns the fallback string", () => {
    const observation = addMockObservation({ value: null });
    expect(getValueAsText(observation)).toEqual("Value unavailable");
  });

  describe("with custom fallback string", () => {
    it("returns the custom fallback string", () => {
      const observation = addMockObservation({ value: null });
      expect(getValueAsText(observation, 2, "None")).toEqual("None");
    });
  });
});
