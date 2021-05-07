import { loadDataset } from "@root";

beforeEach(() => {
  global.fetch = jest.fn().mockImplementation((url) => {
    if (url != "/data/myDataset.json") throw Error("Invalid request");

    return new Promise((resolve) => {
      resolve({
        json: () =>
          Promise.resolve({
            myDataset: {
              data: "test",
            },
          }),
      });
    });
  });
});

afterEach(() => {
  global.fetch.mockClear();
  delete global.fetch;
});

it("loads the dataset into the dataStore", async () => {
  const dataStore = {};

  await loadDataset(dataStore, "myDataset");

  expect(dataStore).toHaveProperty("myDataset", { data: "test" });
});
