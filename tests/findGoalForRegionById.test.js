import { omit } from "lodash";
import { findAssessmentForRegionById } from "@sdgindex/data";
import {
  buildGoal,
  buildIndicators,
  buildRegion,
  buildRegions,
  buildObservation,
  buildObservations,
} from "testHelpers/builders";

const goal = buildGoal({ id: "SDG1" });
const region = buildRegion();
const observation = buildObservation({ assessment: goal, region });
const dataStore = {
  regions: [region, ...buildRegions()],
  assessments: [goal, ...buildIndicators()],
  observations: [observation, ...buildObservations()],
};

it("finds goal by ID", () => {
  expect(findAssessmentForRegionById(dataStore, region, "SDG1")).toMatchObject(
    goal
  );
});

it("includes observation for region", () => {
  expect(findAssessmentForRegionById(dataStore, region, "SDG1")).toMatchObject(
    omit(observation, "id")
  );
});
