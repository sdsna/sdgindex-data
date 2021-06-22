import tmp from "tmp";
import fse from "fs-extra";
import path from "path";
import { writeData } from "@sdgindex/data/parse";

it("creates test.json with minified JSON", () => {
  const tmpDir = tmp.dirSync().name;
  writeData(tmpDir, "test", { dataId: "data" });
  expect(
    fse.readFileSync(path.join(tmpDir, "test.json"), "utf-8").trim()
  ).toEqual(`{"dataId":"data"}`);
});

it("creates test-raw.json with human-readable JSON", () => {
  const tmpDir = tmp.dirSync().name;
  writeData(tmpDir, "test", { dataId: "data" });
  expect(
    fse.readFileSync(path.join(tmpDir, "test-raw.json"), "utf-8").trim()
  ).toEqual(
    `
{
  "dataId": "data"
}
  `.trim()
  );
});
