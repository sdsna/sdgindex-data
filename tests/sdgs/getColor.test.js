import { getColor } from "@root/sdgs";

it("check if returned color of 1 == No poverty", () => {
  expect(getColor(1)).toEqual("#E5243B");
});

it("check if returned color of 5 == Gender equality", () => {
  expect(getColor(5)).toEqual("#ff3a21");
});
