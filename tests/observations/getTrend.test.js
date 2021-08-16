import { getTrend } from "@sdgindex/data/observations";
import { addMockObservation } from "testHelpers/storeMocks";

it("returns ↑", () => {
  expect(getTrend(addMockObservation({ trend: "↑" }))).toEqual("↑");
});

it("returns •", () => {
  expect(getTrend(addMockObservation({ trend: "•" }))).toEqual("•");
});

describe("when trend is not defined", () => {
  it("returns null", () => {
    expect(getTrend({})).toBe(null);
  });
});
