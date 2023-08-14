import { isLnobDimension } from "@sdgindex/data/assessments";
import {
  addMockLnobDimension,
  addMockIndicatorForLnobDimension,
} from "testHelpers/storeMocks";

it("returns true if assessment is a lnob dimension", () => {
  expect(isLnobDimension(addMockLnobDimension())).toBe(true);
});

it("returns false if assessment is not a lnob dimension", () => {
  expect(isLnobDimension(addMockIndicatorForLnobDimension())).toBe(false);
});
