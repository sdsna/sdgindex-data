import { dataStore } from "./dataStore";
import { getGoalsForRegion } from "@root";

it("check if get goals return only types goals for a specific region", () => {
  const region = {
    id: "AL",
    dataId: 43,
    slug: "alabama",
    name: "Alabama",
    type: "state",
  };
  expect(getGoalsForRegion(dataStore, region).length).toEqual(17);
});
it("check if get goals return only right values for a specific region", () => {
  const region = {
    id: "AL",
    dataId: 43,
    slug: "alabama",
    name: "Alabama",
    type: "state",
  };
  expect(getGoalsForRegion(dataStore, region)[1]).toEqual({
    id: "SDG2",
    s: 26.84,
    c: "orange",
    number: 2,
    label: "Zero hunger",
    description:
      "End hunger, achieve food security and improved nutrition and promote sustainable agriculture.",
    type: "goal",
    dataId: "SDG2",
  });
});
