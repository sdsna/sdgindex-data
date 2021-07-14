import { getGoals } from "@sdgindex/data";
import {
  addMockIndicators,
  addMockGoals,
  addMockOverallAssessment,
} from "testHelpers/builders";

it("returns all goals", () => {
  const goals = addMockGoals();
  addMockOverallAssessment();
  addMockIndicators({ goal: goals[0] });

  expect(getGoals()).toEqual(goals);
});
