import { omit } from "lodash";
import { getGoalsForRegion } from "@sdgindex/data";
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

let goals, region, goalObservations;

beforeEach(() => {
  goals = addMockGoals();
  region = addMockRegion();
  goalObservations = goals.map((goal) =>
    addMockObservation({ assessment: goal, region })
  );
  addMockOverallAssessment();

  // Add observations for other regions
  goals.forEach((goal) => addMockObservation({ assessment: goal }));
});

it("returns all goals", () => {
  expect(getGoalsForRegion(region)).toMatchObject(goals);
});

it("returns observations for each goal", () => {
  expect(getGoalsForRegion(region)).toMatchObject(
    goalObservations.map((observation) => omit(observation, "id"))
  );
});
