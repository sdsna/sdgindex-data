import { loadDataset, store } from "@sdgindex/data";

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

it("loads the dataset into the store via fetch", async () => {
  await loadDataset("myDataset");

  expect(store).toHaveProperty("myDataset", { data: "test" });
});
