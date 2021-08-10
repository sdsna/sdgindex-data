import { determineObjectEncoding } from "private:@sdgindex/data/utilities/determineObjectEncoding";

it("puts most frequent key first", () => {
  const objects = [
    { score: 1, value: 0 },
    { score: 2, year: 5 },
  ];

  expect(determineObjectEncoding(objects)).toEqual(["score", "value", "year"]);
});

it("puts least frequent key last", () => {
  const objects = [
    { score: 1, year: 2000 },
    { score: 2, value: 5, year: 2015 },
  ];

  expect(determineObjectEncoding(objects)).toEqual(["score", "year", "value"]);
});
