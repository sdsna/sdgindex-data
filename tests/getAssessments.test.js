import { getAssessments } from "@sdgindex/data";
import {
  addMockIndicators,
  addMockGoals,
  addMockOverallAssessment,
} from "testHelpers/storeMocks";

it("returns all assessments", () => {
  const goals = addMockGoals();
  const assessments = [
    ...goals,
    addMockOverallAssessment(),
    ...addMockIndicators({ goal: goals[0] }),
  ];

  expect(getAssessments()).toEqual(assessments);
});
