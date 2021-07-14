import { omit } from "lodash";
import { getTrendIndicators } from "@sdgindex/data";
import {
  addMockIndicators,
  addMockGoals,
  addMockOverallAssessment,
} from "testHelpers/builders";

it("returns all trend indicators", () => {
  const trendIndicators = addMockIndicators({ hasTrend: true });
  addMockOverallAssessment();
  addMockGoals();
  addMockIndicators();

  expect(getTrendIndicators()).toEqual(trendIndicators);
});
