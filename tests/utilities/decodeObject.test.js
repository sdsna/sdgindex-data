import { decodeObject } from "private:@sdgindex/data/utilities/decodeObject";

it("decodes the array into an object", () => {
  const array = [13, 9, 4];
  const encoding = ["a", "b", "c"];

  expect(decodeObject(array, encoding)).toEqual({
    a: 13,
    b: 9,
    c: 4,
  });
});

it("skips missing properties and nulls", () => {
  const array = [null, null, 15];
  const encoding = ["a", "b", "c", "d", "e"];

  expect(decodeObject(array, encoding)).toEqual({
    c: 15,
  });
});
