import { loadData, loadDataset, store } from "@sdgindex/data";
import resetStore from "testHelpers/resetStore";
jest.mock("mock:@sdgindex/data/loadDataset");

beforeEach(() => {
  resetStore();

  loadDataset.mockImplementation((dataset) => {
    store[dataset] = { test: true };
    return Promise.resolve(store[dataset]);
  });
});

it("loads region, assessments, and observations into store", async () => {
  await loadData();
  expect(store).toHaveProperty("regions");
  expect(store).toHaveProperty("assessments");
  expect(store).toHaveProperty("observations");
});

it("does not load timeseries", async () => {
  await loadData();
  expect(store).not.toHaveProperty("timeseries");
});

describe("when passing timeseries: true", () => {
  it("loads region, assessments, observations, and timeseries", async () => {
    await loadData({ timeseries: true });
    expect(store).toHaveProperty("regions");
    expect(store).toHaveProperty("assessments");
    expect(store).toHaveProperty("observations");
    expect(store).toHaveProperty("timeseries");
  });
});
