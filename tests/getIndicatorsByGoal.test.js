import { getIndicatorsByGoal } from "@root";
import {
  buildIndicators,
  buildGoal,
  buildGoals,
  buildOverallAssessment,
} from "testHelpers/builders";

const goal = buildGoal();
const indicators = buildIndicators({ goal });
const otherIndicators = buildIndicators();
const dataStore = {
  assessments: [
    buildOverallAssessment(),
    goal,
    ...buildGoals(),
    ...indicators,
    ...otherIndicators,
  ],
};

it("returns indicators for the given goal", () => {
  expect(getIndicatorsByGoal(dataStore, goal)).toEqual(indicators);
});
