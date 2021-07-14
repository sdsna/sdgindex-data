import { getIndicators } from "@sdgindex/data";
import {
  addMockIndicators,
  addMockGoals,
  addMockOverallAssessment,
} from "testHelpers/builders";

it("returns all indicators", () => {
  const indicators = addMockIndicators();
  addMockOverallAssessment();
  addMockGoals();

  expect(getIndicators()).toEqual(indicators);
});
