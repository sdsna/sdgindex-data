import { omit } from "lodash";
import { findAssessmentForRegionById } from "@sdgindex/data";
import {
  addMockGoal,
  addMockIndicators,
  addMockRegion,
  addMockRegions,
  addMockObservation,
  addMockObservations,
} from "testHelpers/storeMocks";

let goal, region, observation;

beforeEach(() => {
  goal = addMockGoal({ id: "SDG1" });
  region = addMockRegion();
  observation = addMockObservation({ assessment: goal, region });
  addMockRegions();
  addMockIndicators();
  addMockObservations();
});

it("finds goal by ID", () => {
  expect(findAssessmentForRegionById(region, "SDG1")).toMatchObject(goal);
});

it("includes observation for region", () => {
  expect(findAssessmentForRegionById(region, "SDG1")).toMatchObject(
    omit(observation, "id")
  );
});
