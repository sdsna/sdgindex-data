import { loadTimeseries, loadDataset } from "@sdgindex/data";
jest.mock("mock:@sdgindex/data/loadDataset");

it("loads timeseries into dataStore", () => {
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
