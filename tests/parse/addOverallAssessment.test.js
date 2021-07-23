import { addOverallAssessment } from "@sdgindex/data/parse";
import { store } from "@sdgindex/data";

// Clear store before each test
beforeEach(() => {
  Object.keys(store).map((key) => delete store[key]);
});

it("adds the overall assessment to the store", () => {
  addOverallAssessment();

  expect(store.assessments[0]).toEqual({
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
    addOverallAssessment({ slug: "my-custom-slug" });
    expect(store.assessments[0]).toHaveProperty("slug", "my-custom-slug");
  });

  it("adds additional properties", () => {
    addOverallAssessment({ sourceText: "source" });
    expect(store.assessments[0]).toHaveProperty("sourceText", "source");
  });
});
