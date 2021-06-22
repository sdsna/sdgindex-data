import { omit } from "lodash";
import { getRegionsWithAssessmentFast } from "@root";
import {
  buildIndicator,
  buildIndicators,
  buildObservation,
  buildObservations,
  buildRegions,
} from "testHelpers/builders";

const regions = buildRegions();
const indicator = buildIndicator();
const indicatorObservations = regions.map((region) =>
  buildObservation({ region, assessment: indicator })
);
const dataStore = {
  assessments: [indicator, ...buildIndicators()],
  regions,
  observations: [...indicatorObservations, ...buildObservations()],
};

test("Return an array of regions, each including the observation for the given assessment", () => {
  expect(getRegionsWithAssessmentFast(dataStore, indicator)).toMatchObject(
    regions
  );
});

test("includes observation for each region", () => {
  expect(getRegionsWithAssessmentFast(dataStore, indicator)).toMatchObject(
    indicatorObservations.map((observation) => omit(observation, "id"))
  );
});
