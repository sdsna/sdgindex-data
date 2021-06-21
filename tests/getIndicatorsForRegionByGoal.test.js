import { omit } from "lodash";
import { getIndicatorsForRegionByGoal } from "@root";
import {
  buildGoal,
  buildGoals,
  buildIndicator,
  buildIndicators,
  buildObservation,
  buildObservations,
  buildOverallAssessment,
  buildRegion,
  buildRegions,
} from "testHelpers/builders";

const goal = buildGoal();
const indicators = buildIndicators({ goal });
const region = buildRegion();
const indicatorObservations = indicators.map((indicator) =>
  buildObservation({ assessment: indicator, region })
);
const otherIndicators = buildIndicators();
const dataStore = {
  assessments: [
    buildOverallAssessment(),
    goal,
    ...buildGoals(),
    ...indicators,
    ...otherIndicators,
  ],
  regions: [region, ...buildRegions()],
  observations: [...indicatorObservations, buildObservations()],
};

it("returns all indicators for the given goal", () => {
  expect(getIndicatorsForRegionByGoal(dataStore, region, goal)).toMatchObject(
    indicators
  );
});

it("returns observations for each indicator of the given goal", () => {
  expect(getIndicatorsForRegionByGoal(dataStore, region, goal)).toMatchObject(
    indicatorObservations.map((observation) => omit(observation, "id"))
  );
});
