import { getIndicatorUnit } from "@root/parse";

it("extracts '%' from label", () => {
  expect(getIndicatorUnit("this is label (%)")).toEqual("%");
});

it("extracts 'unit' from label", () => {
  expect(getIndicatorUnit("this is label (unit)")).toEqual("unit");
});

it("returns null when label has no unit", () => {
  expect(getIndicatorUnit("this is label")).toEqual(null);
});
