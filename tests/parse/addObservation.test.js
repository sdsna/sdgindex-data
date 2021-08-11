import { addObservation } from "@sdgindex/data/parse";
import { addMockIndicator, addMockRegion } from "testHelpers/storeMocks";
import { store } from "@sdgindex/data";

// Clear store before each test
beforeEach(() => {
  Object.keys(store).map((key) => delete store[key]);
});

it("adds the observation to the store", () => {
  const region = addMockRegion();
  region.dataId = 1;
  const indicator = addMockIndicator();
  indicator.dataId = 4;

  addObservation({
    region,
    assessment: indicator,
    value: 2.575241,
    rating: "green",
    trend: "↑",
    year: 2018,
  });

  expect(store.observations["1-4"]).toEqual({
    value: 2.58,
    rating: "green",
    trend: "↑",
    year: 2018,
  });
});

describe("when passing isImputed = true", () => {
  it("adds imputation flag", () => {
    addObservation({
      region: addMockRegion(),
      assessment: addMockIndicator(),
      isImputed: true,
    });

    expect(store.observations["1-1"]).toHaveProperty("isImputed", 1);
  });
});

describe("when passing isImputed = false", () => {
  it("does not add imputation flag", () => {
    addObservation({
      region: addMockRegion(),
      assessment: addMockIndicator(),
      isImputed: false,
    });

    expect(store.observations["1-1"]).toHaveProperty("isImputed", null);
  });
});

describe("when adding two observations for the same region and assessment", () => {
  it("throws an error", () => {
    const region = addMockRegion();
    const assessment = addMockIndicator();

    addObservation({ region, assessment });

    expect(() => addObservation({ region, assessment })).toThrow(Error);
  });
});
