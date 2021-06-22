import { findAssessmentBySlug } from "@sdgindex/data";
import { buildIndicator, buildIndicators } from "testHelpers/builders";

it("finds indicator by slug SDG1_my_indicator", () => {
  const indicator = buildIndicator({ slug: "SDG1_my_indicator" });
  const dataStore = {
    assessments: [indicator, ...buildIndicators()],
  };

  expect(findAssessmentBySlug(dataStore, "SDG1_my_indicator")).toEqual(
    indicator
  );
});
