import { getLabel } from "@root/sdgs";

it("check if returned label of 1 == No poverty", () => {
  expect(getLabel(1)).toEqual("No poverty");
});

it("check if returned label of 5 == Gender equality", () => {
  expect(getLabel(5)).toEqual("Gender equality");
});
