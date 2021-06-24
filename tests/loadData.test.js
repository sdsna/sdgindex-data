import { loadData, loadDataset } from "@sdgindex/data";
jest.mock("mock:@sdgindex/data/loadDataset");

it("loads region, assessments, and observations into dataStore", () => {
  loadDataset.mockImplementation((dataStore, dataset) => {
    dataStore[dataset] = { test: true };

    return Promise.resolve(undefined);
  });
  const dataStore = { state: { isLoaded: false, markAsLoaded: () => {} } };

  loadData(dataStore);

  expect(dataStore).toHaveProperty("regions");
  expect(dataStore).toHaveProperty("assessments");
  expect(dataStore).toHaveProperty("observations");
});
