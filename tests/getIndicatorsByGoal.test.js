import { dataStore } from "./dataStore";
import { getIndicatorsByGoal } from "../src/getIndicatorsByGoal";

it("check if get getIndicatorsByGoal return all indicators for a specific goal", () => {
  const goal = {
    id: "SDG11",
    number: 11,
    label: "Sustainable cities and communities",
    description:
      "Make cities and human settlements inclusive, safe, resilient and sustainable.",
    type: "goal",
    dataId: "SDG11",
  };
  expect(getIndicatorsByGoal(dataStore, goal).length).toEqual(5);
  getIndicatorsByGoal(dataStore, goal).map((indicator) =>
    expect(indicator.goalNumber).toEqual(11)
  );
});
