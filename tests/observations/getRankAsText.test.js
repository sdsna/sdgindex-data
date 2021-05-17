import { getRankAsText } from "@root/observations";

it("check if the Rank of the object is well returned for 238 as String", () => {
  expect(getRankAsText({ r: 238 })).toEqual("238");
});

it("check if the Rank of the object does not return a number", () => {
  expect(getRankAsText({ r: 0 })).not.toEqual(0);
});
