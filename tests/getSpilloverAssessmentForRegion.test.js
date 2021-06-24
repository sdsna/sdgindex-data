import { omit } from "lodash";
import { getSpilloverAssessmentForRegion } from "@sdgindex/data";
import {
  buildIndicators,
  buildGoals,
  buildObservation,
  buildObservations,
  buildOverallAssessment,
  buildSpilloverAssessment,
  buildRegion,
  buildRegions,
} from "testHelpers/builders";

const spilloverAssessment = buildSpilloverAssessment();
const region = buildRegion();
const observation = buildObservation({
  assessment: spilloverAssessment,
  region,
});
const dataStore = {
  regions: [region, ...buildRegions()],
  assessments: [
    buildOverallAssessment(),
    spilloverAssessment,
    ...buildIndicators(),
  ],
  observations: [observation, ...buildObservations()],
};

it("returns the overall spillover index assessment", () => {
  expect(getSpilloverAssessmentForRegion(dataStore, region)).toMatchObject(
    spilloverAssessment
  );
});

it("includes observation for region", () => {
  expect(getSpilloverAssessmentForRegion(dataStore, region)).toMatchObject(
    omit(observation, "id")
  );
});
