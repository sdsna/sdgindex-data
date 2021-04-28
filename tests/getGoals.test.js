import { dataStore } from "./dataStore";
import { getGoals } from "@root";

it("check if get goals return only types goals", () => {
  expect(getGoals(dataStore).filter((goal) => goal.type !== "goal")).toEqual(
    []
  );
});
