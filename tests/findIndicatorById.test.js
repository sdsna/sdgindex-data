import { findIndicatorById } from "@root";
import { buildIndicator, buildIndicators } from "testHelpers/builders";

test("Finds indicator by id for SDG14_my_indicator", () => {
  const indicator = buildIndicator({ id: "SDG14_my_indicator" });
  const dataStore = {
    assessments: [indicator, ...buildIndicators()],
  };

  expect(findIndicatorById(dataStore, "SDG14_my_indicator")).toEqual(indicator);
});
