import { addIndicator } from "@sdgindex/data/parse";
import { store } from "@sdgindex/data";

// Clear store before each test
beforeEach(() => {
  Object.keys(store).map((key) => delete store[key]);
});

it("adds the indicator to the store", () => {
  addIndicator({
    id: "sdg1_wpc",
    goalNumber: 1,
    labelWithUnit: "Poverty headcount ratio at $1.90/day (%)",
  });

  expect(store.assessments).toHaveLength(1);
  expect(store.assessments[0]).toMatchObject({
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
    addIndicator({
      id: "sdg1_wpc",
      goalNumber: 1,
      labelWithUnit: "Poverty headcount ratio at $1.90/day (%)",
      slug: "my-custom-slug",
    });

    expect(store.assessments[0]).toHaveProperty("slug", "my-custom-slug");
  });
});

describe("when adding 10 indicators", () => {
  it("it sets a unique dataId for each one", () => {
    for (let i = 0; i < 10; i++) {
      addIndicator({
        id: "sdg1_wpc",
        goalNumber: 1,
        labelWithUnit: "Poverty headcount ratio at $1.90/day (%)",
      });
    }

    const dataIds = store.assessments.map((indicator) => indicator.dataId);
    expect(Array.from(new Set(dataIds))).toHaveLength(10);
  });
});
