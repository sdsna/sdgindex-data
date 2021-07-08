import { loadDataset, store } from "@sdgindex/data";
import mockStore from "testHelpers/mockStore";

describe("in browser (window is defined)", () => {
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
});

describe("in server (window is undefined)", () => {
  const { window } = global;

  beforeAll(() => {
    delete global.window;

    // Reset modules, because DATA_DIR is not defined in browser environment
    jest.resetModules();
  });

  afterAll(() => {
    global.window = window;
  });

  it("loads the dataset into the store via require", async () => {
    const path = require("path");
    const { readJson } = require("fs-extra");
    jest.mock("fs-extra");
    readJson.mockImplementation((filePath) => {
      if (filePath != path.resolve("public/data/myServerDataset.json"))
        throw Error("Invalid path");

      return Promise.resolve({
        myServerDataset: {
          data: "test",
        },
      });
    });

    // Manually require module after calling jest.resetModules();
    const { loadDataset, store } = require("@sdgindex/data");

    await loadDataset("myServerDataset");

    expect(store).toHaveProperty("myServerDataset", { data: "test" });
  });
});
