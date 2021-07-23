import { addGoal } from "@sdgindex/data/parse";
import { store } from "@sdgindex/data";

// Clear store before each test
beforeEach(() => {
  Object.keys(store).map((key) => delete store[key]);
});

it("adds SDG 14 to the store", () => {
  addGoal({ number: 14 });

  expect(store.assessments).toHaveLength(1);

  expect(store.assessments[0]).toEqual({
    id: "SDG14",
    dataId: "SDG14",
    number: 14,
    label: "Life below water",
    description: expect.stringMatching("oceans"),
    type: "goal",
  });
});
