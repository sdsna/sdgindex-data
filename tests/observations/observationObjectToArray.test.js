import { observationObjectToArray } from "@root/observations";

it("check if convert well an object to an array", () => {
  expect(
    observationObjectToArray({ v: 238, y: 2019, c: "red", s: 33, r: 239 })
  ).toEqual([238, 2019, "red", 33, 239]);
});

it("check if convert well an object to an array with missing params", () => {
  expect(observationObjectToArray({ v: 238, y: 2019, s: 33, r: 239 })).toEqual([
    238,
    2019,
    undefined,
    33,
    239,
  ]);
});
