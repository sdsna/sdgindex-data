import { getIndicatorsByLnobDimension } from "@sdgindex/data";
import {
  addMockIndicatorsForLnobDimension,
  addMockLnobDimension,
  addMockOverallAssessment,
} from "testHelpers/storeMocks";

it("returns indicators for the given lnob dimension", () => {
  const lnob = addMockLnobDimension();
  const indicators = addMockIndicatorsForLnobDimension({ lnob });
  addMockIndicatorsForLnobDimension();
  addMockOverallAssessment();

  expect(getIndicatorsByLnobDimension(lnob)).toEqual(indicators);
});
