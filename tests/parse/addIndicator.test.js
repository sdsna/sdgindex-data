import { addIndicator } from "@sdgindex/data/parse";

let dataStore = {};
beforeEach(() => {
  // Clear dataStore
  dataStore = {};
});

it("adds the indicator to the dataStore", () => {
  addIndicator(dataStore, {
    id: "sdg1_wpc",
    goalNumber: 1,
    labelWithUnit: "Poverty headcount ratio at $1.90/day (%)",
  });

  expect(dataStore.assessments).toHaveLength(1);
  expect(dataStore.assessments[0]).toMatchObject({
    id: "sdg1_wpc",
    dataId: 1,
    goalNumber: 1,
    label: "Poverty headcount ratio at $1.90/day",
    slug: "poverty-headcount-ratio-at-1-90-day",
    unit: "%",
    type: "indicator",
  });
});

describe("when manually providing the slug", () => {
  it("it uses the user-provided slug", () => {
    addIndicator(dataStore, {
      id: "sdg1_wpc",
      goalNumber: 1,
      labelWithUnit: "Poverty headcount ratio at $1.90/day (%)",
      slug: "my-custom-slug",
    });

    expect(dataStore.assessments[0]).toHaveProperty("slug", "my-custom-slug");
  });
});

describe("when adding 10 indicators", () => {
  it("it sets a unique dataId for each one", () => {
    for (let i = 0; i < 10; i++) {
      addIndicator(dataStore, {
        id: "sdg1_wpc",
        goalNumber: 1,
        labelWithUnit: "Poverty headcount ratio at $1.90/day (%)",
      });
    }

    const dataIds = dataStore.assessments.map((indicator) => indicator.dataId);
    expect(Array.from(new Set(dataIds))).toHaveLength(10);
  });
});
