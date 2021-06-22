import { omit } from "lodash";
import { getIndicatorsForRegion } from "@sdgindex/data";
import {
  buildGoals,
  buildIndicator,
  buildIndicators,
  buildObservation,
  buildObservations,
  buildOverallAssessment,
  buildRegion,
  buildRegions,
} from "testHelpers/builders";

const indicators = buildIndicators();
const region = buildRegion();
const indicatorObservations = indicators.map((indicator) =>
  buildObservation({ assessment: indicator, region })
);
const dataStore = {
  assessments: [buildOverallAssessment(), ...buildGoals(), ...indicators],
  regions: [region, ...buildRegions()],
  observations: [...indicatorObservations, buildObservations()],
};

it("returns all indicators", () => {
  expect(getIndicatorsForRegion(dataStore, region)).toMatchObject(indicators);
});

it("returns observations for each indicator", () => {
  expect(getIndicatorsForRegion(dataStore, region)).toMatchObject(
    indicatorObservations.map((observation) => omit(observation, "id"))
  );
});
