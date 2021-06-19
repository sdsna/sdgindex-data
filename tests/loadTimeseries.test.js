import { loadTimeseries, loadDataset } from "@root";
jest.mock("@root/cjs/loadDataset");

test("Loads timeseries into dataStore", () => {
  loadDataset.mockImplementation((dataStore, dataset) => {
    dataStore[dataset] = { test: true };

    return Promise.resolve(undefined);
  });
  const dataStore = {
    state: { isTimeseriesLoaded: false, markTimeseriesAsLoaded: () => {} },
  };

  loadTimeseries(dataStore);

  expect(dataStore).toHaveProperty("timeseries");
});
