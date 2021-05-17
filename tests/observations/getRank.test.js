import { getRank } from "@root/observations";

it("check if the Rank of the object is well returned for 238", () => {
  expect(getRank({ r: 238 })).toEqual(238);
});

it("check if the Rank of the object is well returned for 1", () => {
  expect(getRank({ r: 0 })).toEqual(0);
});
