import { writeData } from "@root/parse";

// will add automatic tests when add data functions
it("creates test.json and test-raw.json files", () => {
  writeData("./tests/parse/testFiles", "test", { dataId: "data" });
});
