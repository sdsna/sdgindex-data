import { roundNumber } from "@root/parse";

it("round null", () => {
  expect(roundNumber(null, 3)).toEqual(null);
});

it("round negative value", () => {
  expect(roundNumber(-17.333333, 2)).toEqual(-17.33);
});

it("round fix value", () => {
  expect(roundNumber(15, 2)).toEqual(15);
});

it("round positive value", () => {
  expect(roundNumber(1.3, 2)).toEqual(1.3);
});

it("round 0.321", () => {
  expect(roundNumber(0.321, 2)).toEqual(0.32);
});

it("round 0.5555", () => {
  expect(roundNumber(0.555, 2)).toEqual(0.56);
});

it("round 0.5555", () => {
  expect(roundNumber(0.555, 0)).toEqual(1);
});
