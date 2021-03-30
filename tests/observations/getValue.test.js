import { getValue } from "@root/observations";

it("check if the Value of the object is well returned for 238", () => {
  expect(getValue({ v: 238 })).toEqual(238);
});

it("check if the Value of the object is well returned for 0", () => {
  expect(getValue({ v: 0 })).toEqual(0);
});
