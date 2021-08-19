import { omit } from "lodash";
import { findOverallAssessmentForRegion } from "@sdgindex/data";
import {
  addMockIndicators,
  addMockObservation,
  addMockObservations,
  addMockOverallAssessment,
  addMockRegion,
  addMockRegions,
} from "testHelpers/storeMocks";

let overallAssessment, region, observation;

beforeEach(() => {
  overallAssessment = addMockOverallAssessment();
  region = addMockRegion();
  observation = addMockObservation({ assessment: overallAssessment, region });
  addMockRegions();
  addMockIndicators();
  addMockObservations();
});

it("returns the overall assessment", () => {
  expect(findOverallAssessmentForRegion(region)).toMatchObject(
    overallAssessment
  );
});

it("includes observation for region", () => {
  expect(findOverallAssessmentForRegion(region)).toMatchObject(
    omit(observation, "id")
  );
});
