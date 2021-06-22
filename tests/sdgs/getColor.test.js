import { getColor } from "@sdgindex/data/sdgs";

it("returns #E5243B for SDG 1", () => {
  expect(getColor(1)).toEqual("#E5243B");
});

it("returns #ff3a21 for SDG 5", () => {
  expect(getColor(5)).toEqual("#ff3a21");
});
