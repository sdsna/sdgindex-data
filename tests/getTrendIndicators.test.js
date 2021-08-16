import { getTrendIndicators } from "@sdgindex/data";
import {
  addMockIndicators,
  addMockGoals,
  addMockOverallAssessment,
} from "testHelpers/storeMocks";

it("returns all trend indicators", () => {
  const trendIndicators = addMockIndicators({ hasTrend: true });
  addMockOverallAssessment();
  addMockGoals();
  addMockIndicators();

  expect(getTrendIndicators()).toEqual(trendIndicators);
});
