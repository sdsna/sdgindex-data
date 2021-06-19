import { omit } from "lodash";
import { findTimeseriesByRegionAndAssessment } from "@root";
import {
  buildIndicator,
  buildRegion,
  buildObservation,
  buildObservations,
} from "testHelpers/builders";

const assessment = buildIndicator();
const region = buildRegion();
const observation = buildObservation({ assessment, region });
const dataStore = {
  timeseries: [observation, ...buildObservations()],
};

test("Returns an object of the timeseries for the specific region and assessment", () => {
  expect(
    findTimeseriesByRegionAndAssessment(dataStore, region, assessment)
  ).toEqual(observation);
});

test("Includes observation for indicator", () => {
  expect(
    findTimeseriesByRegionAndAssessment(dataStore, region, assessment)
  ).toMatchObject(omit(observation, "id"));
});
