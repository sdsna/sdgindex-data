import { encodeObject } from "private:@sdgindex/data/utilities/encodeObject";

it("encodes the object into array", () => {
  const object = {
    b: 9,
    c: 4,
    a: 13,
  };
  const encoding = ["a", "b", "c"];

  expect(encodeObject(object, encoding)).toEqual([13, 9, 4]);
});

it("fills missing properties with nulls", () => {
  const object = { c: 15 };
  const encoding = ["a", "b", "c"];

  expect(encodeObject(object, encoding)).toEqual([null, null, 15]);
});

it("trims trailing nulls", () => {
  const object = { a: 1, b: null, c: undefined };
  const encoding = ["a", "b", "c", "d"];

  expect(encodeObject(object, encoding)).toEqual([1]);
});

describe("when encoding contains properties not in object", () => {
  it("throws an error", () => {
    const object = {
      a: 1,
      b: 2,
      x: 4,
    };
    const encoding = ["a", "b", "c"];
    expect(() => encodeObject(object, encoding)).toThrow(Error);
  });
});
