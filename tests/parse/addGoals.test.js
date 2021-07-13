import { addGoals } from "@sdgindex/data/parse";

let dataStore = {};
beforeEach(() => {
  // Clear dataStore
  dataStore = {};
});

it("adds all goals to the dataStore", () => {
  addGoals(dataStore);

  expect(dataStore.assessments).toHaveLength(17);

  expect(dataStore.assessments[13]).toEqual({
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
    addGoals(dataStore, { except: [9, 16] });

    expect(dataStore.assessments).toHaveLength(15);

    const goalNumbers = dataStore.assessments.map((goal) => goal.number);
    expect(goalNumbers).not.toContain(9);
    expect(goalNumbers).not.toContain(16);
    expect(goalNumbers).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 17,
    ]);
  });
});
