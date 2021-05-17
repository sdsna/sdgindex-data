import { dataStore } from "./dataStore";
import { getIndicatorsForRegionByGoal } from "../src/getIndicatorsForRegionByGoal";

it("check if get getIndicatorsForRegion return all indicators for a specific region and a specific goal", () => {
  const region = {
    id: "AL",
    dataId: 43,
    slug: "alabama",
    name: "Alabama",
    type: "state",
  };
  const goal = {
    id: "SDG12",
    number: 12,
    label: "Responsible consumption and production",
    description: "Ensure sustainable consumption and production patterns.",
    type: "goal",
    dataId: "SDG12",
  };

  expect(getIndicatorsForRegionByGoal(dataStore, region, goal).length).toEqual(
    3
  );
  getIndicatorsForRegionByGoal(dataStore, region, goal).map((indicator) =>
    expect(indicator.goalNumber).toEqual(12)
  );
});
