import { getTrend } from "@sdgindex/data/observations";
import { addMockObservation } from "testHelpers/builders";

it("returns the trend as a string", () => {
  expect(getTrend(addMockObservation({ trend: "↑" }))).toEqual("↑");
});
