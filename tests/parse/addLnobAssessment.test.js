import { addLnobAssessment } from "@sdgindex/data/parse";
import { store } from "@sdgindex/data";

// Clear store before each test
beforeEach(() => {
  Object.keys(store).map((key) => delete store[key]);
});

it("adds the LNOBllover assessment to the store", () => {
  addLnobAssessment();

  expect(store.assessments[0]).toEqual({
    id: "LNOB",
    dataId: "LNOB",
    slug: "leave-no-one-behind",
    label: "Leave-no-one-behind score",
    description: expect.stringMatching(
      'The SDGs are guided by the principle to "leave no one behind"'
    ),
    type: "custom",
  });
});

describe("when passing custom parameters", () => {
  it("overwrites default properties", () => {
    addLnobAssessment({ description: "my-custom-description" });
    expect(store.assessments[0]).toHaveProperty(
      "description",
      "my-custom-description"
    );
  });

  it("adds additional properties", () => {
    addLnobAssessment({ academicReference: "reference" });
    expect(store.assessments[0]).toHaveProperty(
      "academicReference",
      "reference"
    );
  });
});
