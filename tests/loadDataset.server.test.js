/**
 * @jest-environment node
 */

import path from "path";
import { readJson } from "fs-extra";
import { loadDataset, store } from "@sdgindex/data";

jest.mock("fs-extra");

it("loads the dataset into the store via fs-extra", async () => {
  readJson.mockImplementation((filePath) => {
    if (filePath != path.resolve("public/data/myServerDataset.json"))
      throw Error("Invalid path");

    return Promise.resolve({
      myServerDataset: {
        data: "test",
      },
    });
  });

  await loadDataset("myServerDataset");

  expect(store).toHaveProperty("myServerDataset", { data: "test" });
});
