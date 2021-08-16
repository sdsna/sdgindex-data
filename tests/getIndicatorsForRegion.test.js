import { omit } from "lodash";
import { getIndicatorsForRegion } from "@sdgindex/data";
import {
  addMockGoals,
  addMockIndicators,
  addMockObservation,
  addMockObservations,
  addMockOverallAssessment,
  addMockRegion,
} from "testHelpers/storeMocks";

let indicators, region, indicatorObservations;

beforeEach(() => {
  addMockOverallAssessment();
  addMockGoals();
  indicators = addMockIndicators();
  region = addMockRegion();
  indicatorObservations = indicators.map((indicator) =>
    addMockObservation({ assessment: indicator, region })
  );
  // Add observations for other regions
  indicators.forEach((indicator) =>
    addMockObservations({ assessment: indicator })
  );
});

it("returns all indicators", () => {
  expect(getIndicatorsForRegion(region)).toMatchObject(indicators);
});

it("returns observations for each indicator", () => {
  expect(getIndicatorsForRegion(region)).toMatchObject(
    indicatorObservations.map((observation) => omit(observation, "id"))
  );
});
