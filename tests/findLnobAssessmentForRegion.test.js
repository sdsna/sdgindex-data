import { omit } from "lodash";
import { findLnobAssessmentForRegion } from "@sdgindex/data";
import {
  addMockIndicators,
  addMockObservation,
  addMockObservations,
  addMockOverallAssessment,
  addMockLnobAssessment,
  addMockRegion,
  addMockRegions,
} from "testHelpers/storeMocks";

let lnobAssessment, region, observation;

beforeEach(() => {
  lnobAssessment = addMockLnobAssessment();
  region = addMockRegion();
  observation = addMockObservation({
    assessment: lnobAssessment,
    region,
  });

  addMockRegions();
  addMockOverallAssessment();
  addMockIndicators();
  addMockObservations();
});

it("returns the LNOB assessment", () => {
  expect(findLnobAssessmentForRegion(region)).toMatchObject(lnobAssessment);
});

it("includes observation for region", () => {
  expect(findLnobAssessmentForRegion(region)).toMatchObject(
    omit(observation, "id")
  );
});
