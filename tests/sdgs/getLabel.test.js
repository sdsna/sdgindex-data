import { getLabel } from "@sdgindex/data/sdgs";

it("returns 'Good health and well-being' for SDG 3", () => {
  expect(getLabel(3)).toEqual("Good health and well-being");
});

it("returns 'Responsibe consumption and production' for SDG 12", () => {
  expect(getLabel(12)).toEqual("Responsible consumption and production");
});
