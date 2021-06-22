import { omit } from "lodash";
import { getGoalsForRegion } from "@sdgindex/data";
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

const goals = buildGoals();
const region = buildRegion();
const goalObservations = goals.map((goal) =>
  buildObservation({ assessment: goal, region })
);
const dataStore = {
  assessments: [buildOverallAssessment(), ...goals, ...buildIndicators()],
  regions: [region, ...buildRegions()],
  observations: [...goalObservations, buildObservations()],
};

it("returns all goals", () => {
  expect(getGoalsForRegion(dataStore, region)).toMatchObject(goals);
});

it("returns observations for each goal", () => {
  expect(getGoalsForRegion(dataStore, region)).toMatchObject(
    goalObservations.map((observation) => omit(observation, "id"))
  );
});
