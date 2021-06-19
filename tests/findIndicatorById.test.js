import { findIndicatorById } from "@root";
import { buildIndicator, buildIndicators } from "testHelpers/builders";

test("Finds indicator by id for SDG14_physics", () => {
  const indicator = buildIndicator({ id: "SDG14_physics" });
  const dataStore = {
    assessments: [indicator, ...buildIndicators()],
  };

  expect(findIndicatorById(dataStore, "SDG14_physics")).toEqual(indicator);
});
