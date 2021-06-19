import { omit } from "lodash";
import { getSpilloverAssessmentForRegion } from "@root";
import {
  buildAssessment,
  buildIndicators,
  buildObservation,
  buildObservations,
  buildRegion,
  buildRegions,
} from "testHelpers/builders";

const spilloverAssessment = buildAssessment({ id: "SPI" });
const region = buildRegion();
const observation = buildObservation({
  assessment: spilloverAssessment,
  region,
});
const dataStore = {
  regions: [region, ...buildRegions()],
  assessments: [spilloverAssessment, ...buildIndicators()],
  observations: [observation, ...buildObservations()],
};

test("Returns the spillover assessments for the given region", () => {
  expect(getSpilloverAssessmentForRegion(dataStore, region)).toMatchObject(
    spilloverAssessment
  );
});

test("Includes observation for region", () => {
  expect(getSpilloverAssessmentForRegion(dataStore, region)).toMatchObject(
    omit(observation, "id")
  );
});
