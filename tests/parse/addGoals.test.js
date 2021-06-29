import { addGoals } from "@sdgindex/data/parse";
import { buildGoal } from "testHelpers/builders";

it("add all goals to the dataStore", () => {
  const dataStore = { assessments: [] };
  addGoals(dataStore);

  expect(dataStore.assessments).toHaveLength(17);

  const goal = buildGoal({
    id: "SDG1",
    dataId: "SDG1",
    number: 1,
    label: "No poverty",
    description: "End poverty in all its forms everywhere.",
    type: "goal",
  });
  delete goal.slug;

  expect(dataStore.assessments[0]).toEqual(goal);
});
