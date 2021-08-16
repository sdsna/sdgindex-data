/**
 * @jest-environment node
 */

import path from "path";
import { readJson } from "fs-extra";
import { loadDataset, store } from "@sdgindex/data";
import resetStore from "testHelpers/resetStore";

jest.mock("fs-extra");

beforeEach(resetStore);

// Mock readJson() and return the given data
const mockReadJson = (data) => {
  readJson.mockImplementation((filePath) => {
    if (filePath != path.resolve("public/data/myServerDataset.json"))
      throw Error("Invalid path");

    return Promise.resolve(data);
  });
};

it("loads the dataset into the store via fs-extra", async () => {
  mockReadJson({ myServerDataset: { data: "test" } });

  await loadDataset("myServerDataset");

  expect(store).toHaveProperty("myServerDataset", { data: "test" });
});

describe("when returning multiple keys in dataset", () => {
  it("loads both keys into the store", async () => {
    mockReadJson({
      myServerDataset: { data: "test" },
      myEncoding: [1, 2, 3],
    });

    await loadDataset("myServerDataset");

    expect(store).toHaveProperty("myServerDataset", { data: "test" });
    expect(store).toHaveProperty("myEncoding", [1, 2, 3]);
  });
});
