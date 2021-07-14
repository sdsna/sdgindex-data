import { omit } from "lodash";
import { getRegionsWithAssessment } from "@sdgindex/data";
import {
  addMockIndicator,
  addMockIndicators,
  addMockObservation,
  addMockObservations,
  addMockRegions,
} from "testHelpers/builders";

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

it("returns all regions", () => {
  expect(getRegionsWithAssessment(indicator)).toMatchObject(regions);
});

it("includes observation for each region", () => {
  expect(getRegionsWithAssessment(indicator)).toMatchObject(
    indicatorObservations.map((observation) => omit(observation, "id"))
  );
});
