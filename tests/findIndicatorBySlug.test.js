import { findAssessmentBySlug } from "@sdgindex/data";
import { addMockIndicator, addMockIndicators } from "testHelpers/builders";

it("finds indicator by slug SDG1_my_indicator", () => {
  const indicator = addMockIndicator({ slug: "SDG1_my_indicator" });
  addMockIndicators();

  expect(findAssessmentBySlug("SDG1_my_indicator")).toEqual(indicator);
});
