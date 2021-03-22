import { convertScoreToColor } from "@root/parse";

it("converts 2.5 to yellow", () => {
  expect(convertScoreToColor(2.5)).toEqual("yellow");
});

it("converts null to gray", () => {
  expect(convertScoreToColor(null)).toEqual("gray");
});

it("converts 1.3 to orange", () => {
  expect(convertScoreToColor(1.3)).toEqual("orange");
});

it("converts 1 to orange", () => {
  expect(convertScoreToColor(1)).toEqual("orange");
});

it("converts 0 to red", () => {
  expect(convertScoreToColor(0)).toEqual("red");
});
