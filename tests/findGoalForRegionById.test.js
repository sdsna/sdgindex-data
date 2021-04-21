import { dataStore } from "./dataStore";
import { findGoalForRegionById } from "@root";

it("check if add well dataId if it's not there", () => {
  let goal = {
    c: "red",
    dataId: "SDG1",
    description: "End poverty in all its forms everywhere.",
    id: "SDG1",
    label: "No poverty",
    number: 1,
    s: 0,
    type: "goal",
  };
  let region = {
    id: "CA",
    dataId: 15,
    slug: "california",
    name: "California",
    type: "state",
  };
  expect(findGoalForRegionById(dataStore, region, "SDG1")).toEqual(goal);
});
