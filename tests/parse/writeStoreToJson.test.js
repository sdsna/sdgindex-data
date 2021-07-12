import { writeStoreToJson, writeData } from "@sdgindex/data/parse";
import {
  buildIndicators,
  buildRegions,
  buildObservations,
  buildTimeseries,
} from "testHelpers/builders";

jest.mock("mock:@sdgindex/data/parse/writeData");

it("calls writeData for assessments, regions, obs, and timeseries", () => {
  const assessments = buildIndicators();
  const regions = buildRegions();
  const observations = buildObservations();
  const timeseries = buildTimeseries();

  const store = {
    assessments,
    regions,
    observations,
    timeseries,
  };

  writeStoreToJson(store, "DIR");

  expect(writeData).toHaveBeenCalledWith("DIR", "assessments", { assessments });
  expect(writeData).toHaveBeenCalledWith("DIR", "regions", { regions });
  expect(writeData).toHaveBeenCalledWith("DIR", "observations", {
    observations,
  });
  expect(writeData).toHaveBeenCalledWith("DIR", "timeseries", { timeseries });
});

describe("when store is empty", () => {
  it("writes empty arrays", () => {
    const store = {};

    writeStoreToJson(store, "MY_DIR");

    expect(writeData).toHaveBeenCalledWith("MY_DIR", "assessments", {
      assessments: [],
    });
    expect(writeData).toHaveBeenCalledWith("MY_DIR", "regions", {
      regions: [],
    });
    expect(writeData).toHaveBeenCalledWith("MY_DIR", "observations", {
      observations: [],
    });
    expect(writeData).toHaveBeenCalledWith("MY_DIR", "timeseries", {
      timeseries: [],
    });
  });
});
