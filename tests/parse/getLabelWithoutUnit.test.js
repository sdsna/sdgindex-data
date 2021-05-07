import { getLabelWithoutUnit } from "@root/parse";

it("returns label without '(%)'", () => {
  expect(getLabelWithoutUnit("this is label (%)")).toEqual("this is label");
});

it("returns label without '(unit)'", () => {
  expect(getLabelWithoutUnit("this is label (unit)")).toEqual("this is label");
});

it("returns entire string when label has no unit", () => {
  expect(getLabelWithoutUnit("this is label")).toEqual("this is label");
});
