import { getTrend } from "@root/observations";
import { buildObservation } from "testHelpers/builders";

it("returns the trend as a string", () => {
  expect(getTrend(buildObservation({ trend: "↑" }))).toEqual("↑");
});
