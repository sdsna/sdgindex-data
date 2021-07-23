import { addGoals } from "@sdgindex/data/parse";
import { store } from "@sdgindex/data";

// Clear store before each test
beforeEach(() => {
  Object.keys(store).map((key) => delete store[key]);
});

it("adds all goals to the store", () => {
  addGoals();

  expect(store.assessments).toHaveLength(17);

  expect(store.assessments[13]).toEqual({
    id: "SDG14",
    dataId: "SDG14",
    number: 14,
    label: "Life below water",
    description: expect.stringMatching("oceans"),
    type: "goal",
  });
});

describe("when passing except = [9, 16]", () => {
  it("does not add goals 9 and 16", () => {
    addGoals({ except: [9, 16] });

    expect(store.assessments).toHaveLength(15);

    const goalNumbers = store.assessments.map((goal) => goal.number);
    expect(goalNumbers).not.toContain(9);
    expect(goalNumbers).not.toContain(16);
    expect(goalNumbers).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 17,
    ]);
  });
});
