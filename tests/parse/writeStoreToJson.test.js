/**
 * @jest-environment node
 */

import path from "path";
import { writeJsonSync, ensureDirSync } from "fs-extra";
import { writeStoreToJson } from "@sdgindex/data/parse";
import { config } from "@sdgindex/data";
import {
  addMockGoal,
  addMockIndicators,
  addMockRegions,
  addMockObservation,
  addMockTimeseries,
} from "testHelpers/storeMocks";

jest.mock("fs-extra");

const { DATA_DIR } = config;

it("ensures the DATA_DIR exists", () => {
  writeStoreToJson();
  expect(ensureDirSync).toHaveBeenCalledWith(DATA_DIR);
});

it("calls writeData for assessments, regions, obs, and timeseries", () => {
  const goal = addMockGoal();
  const assessments = [goal, ...addMockIndicators({ goal })];
  const regions = addMockRegions();
  const observations = {};
  const timeseries = {};

  assessments.forEach((assessment) => {
    regions.forEach((region) => {
      observations[`${region.dataId}-${assessment.dataId}`] =
        addMockObservation({
          region,
          assessment,
        });
      timeseries[`${region.dataId}-${assessment.dataId}`] = addMockTimeseries({
        region,
        assessment,
      }).timeseries;
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
    { observations: expect.any(Object), observationEncoding: expect.any(Array) }
  );
  expect(writeJsonSync).toHaveBeenCalledWith(
    path.join(DATA_DIR, "observations-raw.json"),
    {
      observations: expect.any(Object),
      observationEncoding: expect.any(Array),
    },
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
      { observations: {}, observationEncoding: [] }
    );
    expect(writeJsonSync).toHaveBeenCalledWith(
      path.join(DATA_DIR, "timeseries.json"),
      { timeseries: {} }
    );
  });
});
