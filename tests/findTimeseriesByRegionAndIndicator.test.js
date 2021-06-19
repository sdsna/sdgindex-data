import { omit } from "lodash";
import { findTimeseriesByRegionAndIndicator } from "@root";
import {
  buildIndicator,
  buildRegion,
  buildObservation,
  buildObservations,
} from "testHelpers/builders";

const assessment = buildIndicator({ v: [0, 1, 2] });
const region = buildRegion();
const observation = buildObservation({ assessment, region });
const dataStore = {
  timeseries: [observation, ...buildObservations()],
};

test("Returns an object of the timeseries for the specific region and indicator", () => {
  expect(
    findTimeseriesByRegionAndIndicator(dataStore, region, assessment)
  ).toEqual(observation);
});

test("Includes observation for indicator", () => {
  expect(
    findTimeseriesByRegionAndIndicator(dataStore, region, assessment)
  ).toMatchObject(omit(observation, "id"));
});
