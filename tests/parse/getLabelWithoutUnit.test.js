import { getLabelWithoutUnit } from "@root/parse";

it("returns label without '(%)'", () => {
  expect(getLabelWithoutUnit("this is label (%)")).toEqual("this is label");
});

it("returns label without '(unit)'", () => {
  expect(getLabelWithoutUnit("this is label (unit)")).toEqual("this is label");
});

it("returns correct label when label has multiple parentheses", () => {
  expect(
    getLabelWithoutUnit(
      "Annual mean concentration of particulate matter of less than 2.5 microns in diameter (PM2.5) (μg/m³)"
    )
  ).toEqual(
    "Annual mean concentration of particulate matter of less than 2.5 microns in diameter (PM2.5)"
  );
});

it("returns entire string when label has no unit", () => {
  expect(getLabelWithoutUnit("this is label")).toEqual("this is label");
});
