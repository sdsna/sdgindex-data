import { omit } from "lodash";
import { getSpilloverAssessmentForRegion } from "@sdgindex/data";
import {
  addMockIndicators,
  addMockGoals,
  addMockObservation,
  addMockObservations,
  addMockOverallAssessment,
  addMockSpilloverAssessment,
  addMockRegion,
  addMockRegions,
} from "testHelpers/builders";

let spilloverAssessment, region, observation;

beforeEach(() => {
  spilloverAssessment = addMockSpilloverAssessment();
  region = addMockRegion();
  observation = addMockObservation({
    assessment: spilloverAssessment,
    region,
  });

  addMockRegions();
  addMockOverallAssessment();
  addMockIndicators();
  addMockObservations();
});

it("returns the overall spillover index assessment", () => {
  expect(getSpilloverAssessmentForRegion(region)).toMatchObject(
    spilloverAssessment
  );
});

it("includes observation for region", () => {
  expect(getSpilloverAssessmentForRegion(region)).toMatchObject(
    omit(observation, "id")
  );
});
