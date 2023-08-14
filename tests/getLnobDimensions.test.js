import { getLnobDimensions } from "@sdgindex/data";
import {
  addMockIndicatorForLnobDimension,
  addMockLnobDimensions,
} from "testHelpers/storeMocks";

it("returns all lnobs", () => {
  const lnobs = addMockLnobDimensions();
  addMockIndicatorForLnobDimension({ lnob: lnobs[0] });

  expect(getLnobDimensions()).toEqual(lnobs);
});
