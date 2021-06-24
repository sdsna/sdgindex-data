import { getGoals } from "@sdgindex/data";
import {
  buildIndicators,
  buildGoals,
  buildOverallAssessment,
} from "testHelpers/builders";

const goals = buildGoals();
const dataStore = {
  assessments: [buildOverallAssessment(), ...goals, ...buildIndicators()],
};

it("returns all goals", () => {
  expect(getGoals(dataStore)).toEqual(goals);
});
