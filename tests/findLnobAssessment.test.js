import { findLnobAssessment } from "@sdgindex/data";
import {
  addMockIndicators,
  addMockGoals,
  addMockOverallAssessment,
  addMockLnobAssessment,
} from "testHelpers/storeMocks";

it("returns the overall assessment", () => {
  const lnobAssessment = addMockLnobAssessment();
  addMockOverallAssessment();
  addMockGoals();
  addMockIndicators();

  expect(findLnobAssessment()).toEqual(lnobAssessment);
});
