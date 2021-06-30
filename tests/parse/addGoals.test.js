import { addGoals } from "@sdgindex/data/parse";
import { buildGoal } from "testHelpers/builders";

it("add all goals to the dataStore", () => {
  const dataStore = { assessments: [] };
  addGoals(dataStore);

  expect(dataStore.assessments).toHaveLength(17);

  const goal = buildGoal({
    id: "SDG14",
    dataId: "SDG14",
    number: 14,
    label: "Life below water",
    description:
      "Conserve and sustainably use the oceans, seas and marine resources for sustainable development.",
    type: "goal",
  });
  delete goal.slug;

  expect(dataStore.assessments[13]).toEqual(goal);
});
