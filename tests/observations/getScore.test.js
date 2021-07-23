import { getScore } from "@sdgindex/data/observations";
import { addMockObservation } from "testHelpers/storeMocks";

it("returns the numeric score", () => {
  expect(getScore(addMockObservation({ score: 75.3 }))).toEqual(75.3);
});
