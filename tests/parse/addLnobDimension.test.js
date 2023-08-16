import { addLnobDimension } from "@sdgindex/data/parse";
import { store } from "@sdgindex/data";

// Clear store before each test
beforeEach(() => {
  Object.keys(store).map((key) => delete store[key]);
});

it("adds LNOB 3 to the store", () => {
  addLnobDimension({ number: 3 });

  expect(store.assessments).toHaveLength(1);

  expect(store.assessments[0]).toEqual({
    id: "LNOB3",
    dataId: "LNOB3",
    number: 3,
    category: "genre",
    label: "Inégalité des sexes",
    description: expect.stringMatching("sexuelle"),
    type: "lnob",
  });
});
