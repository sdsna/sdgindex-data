import { getIndicatorUnit } from "@sdgindex/data/parse";

it("extracts '%' from label", () => {
  expect(getIndicatorUnit("this is label (%)")).toEqual("%");
});

it("extracts 'unit' from label", () => {
  expect(getIndicatorUnit("this is label (unit)")).toEqual("unit");
});

it("extracts unit from label with multiple parentheses", () => {
  expect(
    getIndicatorUnit(
      "Youth not in employment, education or training (NEET) (% of population aged 15 to 29)"
    )
  ).toEqual("% of population aged 15 to 29");
});

it("returns null when label has no unit", () => {
  expect(getIndicatorUnit("this is label")).toEqual(null);
});
