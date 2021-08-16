import { loadDataset, store } from "@sdgindex/data";
import resetStore from "testHelpers/resetStore";

beforeEach(resetStore);

afterEach(() => {
  delete global.fetch;
});

const mockFetch = (data) => {
  global.fetch = jest.fn().mockImplementation((url) => {
    if (url != "/data/myDataset.json") throw Error("Invalid request");

    return new Promise((resolve) => {
      resolve({
        json: () => Promise.resolve(data),
      });
    });
  });
};

it("loads the dataset into the store via fetch", async () => {
  mockFetch({ myDataset: { data: "test" } });

  await loadDataset("myDataset");

  expect(store).toHaveProperty("myDataset", { data: "test" });
});

describe("when returning multiple keys in dataset", () => {
  it("loads both keys into the store", async () => {
    mockFetch({ myDataset: { data: "test" }, myEncoding: [1, 2, 3] });

    await loadDataset("myDataset");

    expect(store).toHaveProperty("myDataset", { data: "test" });
    expect(store).toHaveProperty("myEncoding", [1, 2, 3]);
  });
});
