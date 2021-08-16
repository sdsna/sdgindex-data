import { omit } from "lodash";
import { getIndicatorsForRegionByGoal } from "@sdgindex/data";
import {
  addMockGoal,
  addMockIndicators,
  addMockObservation,
  addMockOverallAssessment,
  addMockRegion,
  addMockRegions,
} from "testHelpers/storeMocks";

let goal, indicators, region, indicatorObservations;

beforeEach(() => {
  addMockOverallAssessment();
  addMockRegions();

  goal = addMockGoal();
  region = addMockRegion();
  indicators = addMockIndicators({ goal });

  // Set up observations for region with goal
  indicatorObservations = indicators.map((indicator) =>
    addMockObservation({ assessment: indicator, region })
  );

  // Set up other observations for region but for another goal
  const otherIndicators = addMockIndicators();
  otherIndicators.forEach((indicator) =>
    addMockObservation({ assessment: indicator, region })
  );
});

it("returns all indicators for the given goal", () => {
  expect(getIndicatorsForRegionByGoal(region, goal)).toMatchObject(indicators);
});

it("returns observations for each indicator of the given goal", () => {
  expect(getIndicatorsForRegionByGoal(region, goal)).toMatchObject(
    indicatorObservations.map((observation) => omit(observation, "id"))
  );
});
