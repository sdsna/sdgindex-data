import { getTrend } from "@root/observations";
import { buildObservation } from "testHelpers/builders";

test("Returns the trend as a string", () => {
  expect(getTrend(buildObservation({ a: "↑" }))).toEqual("↑");
});
