import { addSpilloverAssessment } from "@sdgindex/data/parse";
import { store } from "@sdgindex/data";

// Clear store before each test
beforeEach(() => {
  Object.keys(store).map((key) => delete store[key]);
});

it("adds the spillover assessment to the store", () => {
  addSpilloverAssessment();

  expect(store.assessments[0]).toEqual({
    id: "SPI",
    dataId: "SPI",
    slug: "spillovers",
    label: "Spillover score",
    description: expect.stringMatching(
      "Each country's actions can have positive or negative effects on other countries' abilities to achieve the SDGs."
    ),
    type: "custom",
  });
});

describe("when passing custom parameters", () => {
  it("overwrites default properties", () => {
    addSpilloverAssessment({ description: "my-custom-description" });
    expect(store.assessments[0]).toHaveProperty(
      "description",
      "my-custom-description"
    );
  });

  it("adds additional properties", () => {
    addSpilloverAssessment({ academicReference: "reference" });
    expect(store.assessments[0]).toHaveProperty(
      "academicReference",
      "reference"
    );
  });
});
