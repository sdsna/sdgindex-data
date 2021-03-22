import { getIndicatorUnit } from "@root/parse";

it("classic tests", () => {
  expect(getIndicatorUnit("this is label (%)")).toEqual("%");
});

it("classic tests", () => {
  expect(getIndicatorUnit("this is label (this is label)")).toEqual(
    "this is label"
  );
});

it("classic tests without label", () => {
  expect(getIndicatorUnit("this is label")).toEqual(null);
});

it("with empty string", () => {
  expect(getIndicatorUnit("")).toEqual(null);
});
