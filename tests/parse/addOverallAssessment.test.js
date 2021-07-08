import { addOverallAssessment } from "@sdgindex/data/parse";

let dataStore = {};
beforeEach(() => {
  // Clear dataStore
  dataStore = {};
});

it("adds the overall assessment to the dataStore", () => {
  addOverallAssessment(dataStore);

  expect(dataStore.assessments[0]).toEqual({
    id: "TOT",
    dataId: "TOT",
    slug: "overall",
    label: "Overall score",
    description: expect.stringMatching(
      "The overall score measures a country's total progress towards achieving all 17 SDGs"
    ),
    type: "custom",
  });
});

describe("when passing custom parameters", () => {
  it("overwrites default properties", () => {
    addOverallAssessment(dataStore, { slug: "my-custom-slug" });
    expect(dataStore.assessments[0]).toHaveProperty("slug", "my-custom-slug");
  });

  it("adds additional properties", () => {
    addOverallAssessment(dataStore, { sourceText: "source" });
    expect(dataStore.assessments[0]).toHaveProperty("sourceText", "source");
  });
});
