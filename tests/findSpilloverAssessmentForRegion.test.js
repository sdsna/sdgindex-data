import { omit } from "lodash";
import { findSpilloverAssessmentForRegion } from "@sdgindex/data";
import {
  addMockIndicators,
  addMockObservation,
  addMockObservations,
  addMockOverallAssessment,
  addMockSpilloverAssessment,
  addMockRegion,
  addMockRegions,
} from "testHelpers/storeMocks";

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
  expect(findSpilloverAssessmentForRegion(region)).toMatchObject(
    spilloverAssessment
  );
});

it("includes observation for region", () => {
  expect(findSpilloverAssessmentForRegion(region)).toMatchObject(
    omit(observation, "id")
  );
});
