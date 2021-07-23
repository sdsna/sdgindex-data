import { getRank } from "@sdgindex/data/observations";
import { addMockObservation } from "testHelpers/storeMocks";

it("returns the numeric rank", () => {
  expect(getRank(addMockObservation({ rank: 238 }))).toEqual(238);
});
