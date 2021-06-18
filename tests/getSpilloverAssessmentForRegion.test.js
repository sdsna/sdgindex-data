import { omit } from "lodash";
import { getOverallAssessmentForRegion } from "@root";
import {
  buildIndicators,
  buildGoals,
  buildObservation,
  buildObservations,
  buildOverallAssessment,
  buildRegion,
  buildRegions,
} from "testHelpers/builders";

const overallAssessment = buildOverallAssessment();
const region = buildRegion();
const observation = buildObservation({ assessment: overallAssessment, region });
const dataStore = {
  regions: [region, ...buildRegions()],
  assessments: [overallAssessment, ...buildIndicators()],
  observations: [observation, ...buildObservations()],
};

it("returns the overall assessment", () => {
  expect(getOverallAssessmentForRegion(dataStore, region)).toMatchObject(
    overallAssessment
  );
});

it("includes observation for region", () => {
  expect(getOverallAssessmentForRegion(dataStore, region)).toMatchObject(
    omit(observation, "id")
  );
});
