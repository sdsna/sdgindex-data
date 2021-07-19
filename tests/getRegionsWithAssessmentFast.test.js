import { omit } from "lodash";
import { getRegionsWithAssessmentFast } from "@sdgindex/data";
import {
  addMockIndicator,
  addMockIndicators,
  addMockObservation,
  addMockObservations,
  addMockRegions,
} from "testHelpers/storeMocks";

let regions, indicator, indicatorObservations;

beforeEach(() => {
  regions = addMockRegions();
  indicator = addMockIndicator();
  indicatorObservations = regions.map((region) =>
    addMockObservation({ region, assessment: indicator })
  );

  // Add observations with other indicators
  regions.forEach((region) => addMockObservations({ region }));
});

test("Return an array of regions, each including the observation for the given assessment", () => {
  expect(getRegionsWithAssessmentFast(indicator)).toMatchObject(regions);
});

test("includes observation for each region", () => {
  expect(getRegionsWithAssessmentFast(indicator)).toMatchObject(
    indicatorObservations.map((observation) => omit(observation, "id"))
  );
});
