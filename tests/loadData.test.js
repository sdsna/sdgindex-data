import { loadData, loadDataset } from "@root";
jest.mock("@root/cjs/loadDataset");

it("Load all data from dataStore in dataset object", () => {
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
