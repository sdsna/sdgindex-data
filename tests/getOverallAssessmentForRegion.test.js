import { omit } from "lodash";
import { getOverallAssessmentForRegion } from "@sdgindex/data";
import {
  addMockIndicators,
  addMockGoals,
  addMockObservation,
  addMockObservations,
  addMockOverallAssessment,
  addMockRegion,
  addMockRegions,
} from "testHelpers/builders";

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
  expect(getOverallAssessmentForRegion(region)).toMatchObject(
    overallAssessment
  );
});

it("includes observation for region", () => {
  expect(getOverallAssessmentForRegion(region)).toMatchObject(
    omit(observation, "id")
  );
});
