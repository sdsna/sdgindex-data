import { getTrend } from "@root/observations";
import { buildObservation } from "testHelpers/builders";

it("Returns the numeric value", () => {
  expect(getTrend(buildObservation({ a: "↑" }))).toEqual("↑");
});
