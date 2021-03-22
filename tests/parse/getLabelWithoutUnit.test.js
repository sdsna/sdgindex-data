import { getLabelWithoutUnit } from "@root/parse";

it("classic tests", () => {
  expect(getLabelWithoutUnit("this is label (%)")).toEqual("this is label");
});

it("classic tests", () => {
  expect(getLabelWithoutUnit("this is label (this is unit)")).toEqual(
    "this is label"
  );
});

it("classic tests without unit", () => {
  expect(getLabelWithoutUnit("this is label")).toEqual("this is label");
});

it("test for empty", () => {
  expect(getLabelWithoutUnit("")).toEqual("");
});
