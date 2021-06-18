import { getSpilloverAssessment } from "../src/getSpilloverAssessment";
import { buildIndicator, buildIndicators } from "testHelpers/builders";

test("Get spillover assessment from the dataStore", () => {
  const indicator = buildIndicator({ id: "SPI" });
  const dataStore = {
    assessments: [indicator, ...buildIndicators()],
  };
  expect(getSpilloverAssessment(dataStore)).toEqual(indicator);
});
