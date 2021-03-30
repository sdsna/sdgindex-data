import { getScore } from "@root/observations";

it("check if the Score of the object is well returned for 238", () => {
  expect(getScore({ s: 238 })).toEqual(238);
});

it("check if the Score of the object is well returned for 0", () => {
  expect(getScore({ s: 0 })).toEqual(0);
});
