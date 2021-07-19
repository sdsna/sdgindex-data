import { getIndicators } from "@sdgindex/data";
import {
  addMockIndicators,
  addMockGoals,
  addMockOverallAssessment,
} from "testHelpers/storeMocks";

it("returns all indicators", () => {
  const indicators = addMockIndicators();
  addMockOverallAssessment();
  addMockGoals();

  expect(getIndicators()).toEqual(indicators);
});
