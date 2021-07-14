/**
 * @jest-environment node
 */

import path from "path";
import { writeJsonSync } from "fs-extra";
import { writeStoreToJson } from "@sdgindex/data/parse";
import { config } from "@sdgindex/data";
import {
  addMockGoal,
  addMockIndicators,
  addMockRegions,
  addMockObservation,
  addMockTimeseries,
} from "testHelpers/builders";

jest.mock("fs-extra");
const { DATA_DIR } = config;

it("calls writeData for assessments, regions, obs, and timeseries", () => {
  const goal = addMockGoal();
  const assessments = [goal, ...addMockIndicators({ goal })];
  const regions = addMockRegions();
  const observations = [];
  const timeseries = [];

  assessments.forEach((assessment) => {
    regions.forEach((region) => {
      observations.push(addMockObservation({ region, assessment }));
      timeseries.push(addMockTimeseries({ region, assessment }));
    });
  });

  writeStoreToJson();

  expect(writeJsonSync).toHaveBeenCalledWith(
    path.join(DATA_DIR, "assessments.json"),
    { assessments }
  );
  expect(writeJsonSync).toHaveBeenCalledWith(
    path.join(DATA_DIR, "assessments-raw.json"),
    { assessments },
    { spaces: 2 }
  );
  expect(writeJsonSync).toHaveBeenCalledWith(
    path.join(DATA_DIR, "regions.json"),
    { regions }
  );
  expect(writeJsonSync).toHaveBeenCalledWith(
    path.join(DATA_DIR, "regions-raw.json"),
    { regions },
    { spaces: 2 }
  );
  expect(writeJsonSync).toHaveBeenCalledWith(
    path.join(DATA_DIR, "observations.json"),
    { observations }
  );
  expect(writeJsonSync).toHaveBeenCalledWith(
    path.join(DATA_DIR, "observations-raw.json"),
    { observations },
    { spaces: 2 }
  );
  expect(writeJsonSync).toHaveBeenCalledWith(
    path.join(DATA_DIR, "timeseries.json"),
    { timeseries }
  );
  expect(writeJsonSync).toHaveBeenCalledWith(
    path.join(DATA_DIR, "timeseries-raw.json"),
    { timeseries },
    { spaces: 2 }
  );
});

describe("when store is empty", () => {
  it("writes empty arrays", () => {
    writeStoreToJson();

    expect(writeJsonSync).toHaveBeenCalledWith(
      path.join(DATA_DIR, "assessments.json"),
      { assessments: [] }
    );
    expect(writeJsonSync).toHaveBeenCalledWith(
      path.join(DATA_DIR, "regions.json"),
      { regions: [] }
    );
    expect(writeJsonSync).toHaveBeenCalledWith(
      path.join(DATA_DIR, "observations.json"),
      { observations: [] }
    );
    expect(writeJsonSync).toHaveBeenCalledWith(
      path.join(DATA_DIR, "timeseries.json"),
      { timeseries: [] }
    );
  });
});
