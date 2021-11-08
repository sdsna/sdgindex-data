import { isDataLoaded, store } from "@sdgindex/data";
import resetStore from "testHelpers/resetStore";

beforeEach(resetStore);

it("returns false by default", () => {
  expect(isDataLoaded()).toBe(false);
});

describe("when assessments are loading", () => {
  beforeEach(() => {
    store.assessments = new Promise(() => {});
    store.regions = [];
    store.observations = {};
  });

  it("returns false", () => {
    expect(isDataLoaded()).toBe(false);
  });
});

describe("when assessments, regions, and observations are present", () => {
  beforeEach(() => {
    store.assessments = [];
    store.regions = [];
    store.observations = {};
  });

  it("returns true", () => {
    expect(isDataLoaded()).toBe(true);
  });

  it("returns false for timeseries", () => {
    expect(isDataLoaded({ timeseries: true })).toBe(false);
  });
});

describe("when assessments, regions, obs, and timeseries are present", () => {
  beforeEach(() => {
    store.assessments = [];
    store.regions = [];
    store.observations = {};
    store.timeseries = [];
  });

  it("returns true", () => {
    expect(isDataLoaded()).toBe(true);
  });

  it("returns true for timeseries", () => {
    expect(isDataLoaded({ timeseries: true })).toBe(true);
  });
});
