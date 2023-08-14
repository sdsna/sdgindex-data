import { addLnobDimensions } from "@sdgindex/data/parse";
import { store } from "@sdgindex/data";

// Clear store before each test
beforeEach(() => {
  Object.keys(store).map((key) => delete store[key]);
});

it("adds all LNOBs to the store", () => {
  addLnobDimensions();

  expect(store.assessments).toHaveLength(4);

  expect(store.assessments[3]).toEqual({
    id: "LNOB4",
    dataId: "LNOB4",
    number: 4,
    category: "revenus",
    label: "Inégalité des revenus",
    description: expect.stringMatching("inégalités"),
    type: "lnob",
  });
});

describe("when passing except = [2]", () => {
  it("does not add LNOB 2", () => {
    addLnobDimensions({ except: [2] });

    expect(store.assessments).toHaveLength(3);

    const lnobNumbers = store.assessments.map((goal) => goal.number);
    expect(lnobNumbers).not.toContain(2);
    expect(lnobNumbers).toEqual([1, 3, 4]);
  });
});
