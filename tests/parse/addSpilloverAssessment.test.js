import { addSpilloverAssessment } from "@sdgindex/data/parse";

let dataStore = {};
beforeEach(() => {
  // Clear dataStore
  dataStore = {};
});

it("adds the spillover assessment to the dataStore", () => {
  addSpilloverAssessment(dataStore);

  expect(dataStore.assessments[0]).toEqual({
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
    addSpilloverAssessment(dataStore, { description: "my-custom-description" });
    expect(dataStore.assessments[0]).toHaveProperty(
      "description",
      "my-custom-description"
    );
  });

  it("adds additional properties", () => {
    addSpilloverAssessment(dataStore, { academicReference: "reference" });
    expect(dataStore.assessments[0]).toHaveProperty(
      "academicReference",
      "reference"
    );
  });
});
