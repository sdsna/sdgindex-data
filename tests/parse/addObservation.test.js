import { addObservation } from "@sdgindex/data/parse";
import { buildIndicator, buildRegion } from "testHelpers/builders";

let dataStore = {};
beforeEach(() => {
  // Clear dataStore
  dataStore = {};
});

it("adds the observation to the dataStore", () => {
  const region = buildRegion({ dataId: 1 });
  const indicator = buildIndicator({ dataId: 4 });

  addObservation(dataStore, {
    region,
    assessment: indicator,
    value: 2.575241,
    rating: "green",
    trend: "↑",
    year: 2018,
  });

  expect(dataStore.observations[0]).toEqual({
    id: "1-4",
    v: 2.58,
    c: "green",
    a: "↑",
    y: 2018,
  });
});

describe("when passing isImputed = true", () => {
  it("adds imputation flag", () => {
    addObservation(dataStore, {
      region: buildRegion(),
      assessment: buildIndicator(),
      isImputed: true,
    });

    expect(dataStore.observations[0]).toHaveProperty("i", 1);
  });
});

describe("when passing isImputed = false", () => {
  it("does not add imputation flag", () => {
    addObservation(dataStore, {
      region: buildRegion(),
      assessment: buildIndicator(),
      isImputed: false,
    });

    expect(dataStore.observations[0]).not.toHaveProperty("i");
  });
});
