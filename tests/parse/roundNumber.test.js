import { roundNumber } from "@sdgindex/data/parse";

it("rounds null to null", () => {
  expect(roundNumber(null, 3)).toEqual(null);
});

it("rounds -17.333333 to -17.33 with precision 2", () => {
  expect(roundNumber(-17.333333, 2)).toEqual(-17.33);
});

it("rounds 15 to 15 with precision 2", () => {
  expect(roundNumber(15, 2)).toEqual(15);
});

it("rounds 1.3 to 1.3 with precision 2", () => {
  expect(roundNumber(1.3, 2)).toEqual(1.3);
});

it("rounds 0.321 to 0.32 with precision 2", () => {
  expect(roundNumber(0.321, 2)).toEqual(0.32);
});

it("rounds 0.5555 to 0.56 with precision 2", () => {
  expect(roundNumber(0.555, 2)).toEqual(0.56);
});

it("rounds 0.5555 to 1 with precision 0", () => {
  expect(roundNumber(0.555, 0)).toEqual(1);
});
