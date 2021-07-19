import { omit } from "lodash";
import { getIndicatorsForRegion, store } from "@sdgindex/data";
import {
  addMockGoals,
  addMockIndicator,
  addMockIndicators,
  addMockObservation,
  addMockObservations,
  addMockOverallAssessment,
  addMockRegion,
  addMockRegions,
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
