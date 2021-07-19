import { getIndicatorsByGoal } from "@sdgindex/data";
import {
  addMockIndicators,
  addMockGoal,
  addMockGoals,
  addMockOverallAssessment,
} from "testHelpers/storeMocks";

it("returns indicators for the given goal", () => {
  const goal = addMockGoal();
  const indicators = addMockIndicators({ goal });
  const otherIndicators = addMockIndicators();
  addMockOverallAssessment();
  addMockGoals();

  expect(getIndicatorsByGoal(goal)).toEqual(indicators);
});
