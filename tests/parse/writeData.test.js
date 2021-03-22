import { writeData } from "@root/parse";

// will add automatic tests when add data functions
it("create test files", () => {
  writeData("./tests/parse/testFiles", "test", { dataId: "data" });
});
