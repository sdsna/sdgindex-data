import { loadData } from "@root";

jest.mock("@root", () => {
  return { ...jest.requireActual("@root"), loadDataset: jest.fn() };
});
import { loadDataset } from "@root";

beforeEach(() => {
  loadDataset.mockImplementation(() => {
    console.log("Mocked");
  });
});

it("Load all data from dataStore in dataset object", () => {
  const dataStore = { state: { isLoaded: false } };
  loadData(dataStore);

  expect(dataStore).toHaveProperty("regions");
  expect(dataStore).toHaveProperty("assessments");
  expect(dataStore).toHaveProperty("observations");
});
