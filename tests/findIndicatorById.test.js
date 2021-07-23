import { findIndicatorById } from "@sdgindex/data";
import { addMockIndicator, addMockIndicators } from "testHelpers/storeMocks";

it("finds indicator by id for SDG14_physics", () => {
  const indicator = addMockIndicator({ id: "SDG14_physics" });
  addMockIndicators();

  expect(findIndicatorById("SDG14_physics")).toEqual(indicator);
});
