import { addObservation } from "@sdgindex/data/parse";
import { addMockIndicator, addMockRegion } from "testHelpers/builders";
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

  expect(store.observations[0]).toEqual({
    id: "1-4",
    v: 2.58,
    c: "green",
    a: "↑",
    y: 2018,
  });
});

describe("when passing isImputed = true", () => {
  it("adds imputation flag", () => {
    addObservation({
      region: addMockRegion(),
      assessment: addMockIndicator(),
      isImputed: true,
    });

    expect(store.observations[0]).toHaveProperty("i", 1);
  });
});

describe("when passing isImputed = false", () => {
  it("does not add imputation flag", () => {
    addObservation({
      region: addMockRegion(),
      assessment: addMockIndicator(),
      isImputed: false,
    });

    expect(store.observations[0]).not.toHaveProperty("i");
  });
});
