import { isGoal } from "@root/assessments";

const goalAssessment = { type: "goal" };
const nonGoalAssessment = { type: "lnob" };

it("check if return true if assessment is goal", () => {
  expect(isGoal(goalAssessment)).toEqual(true);
});

it("check if return true if assessment is not a goal", () => {
  expect(isGoal(nonGoalAssessment)).toEqual(false);
});
