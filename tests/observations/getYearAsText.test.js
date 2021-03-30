import { getYearAsText } from "@root/observations";

it("check if the Year of the object is well returned for 2019 as String", () => {
  expect(getYearAsText({ v: 39, y: 2019 })).toEqual("2019");
});

it("check if the Year of the object does not return a number", () => {
  expect(getYearAsText({ v: 10, y: 2010 })).not.toEqual(2010);
});

it("check if the fallback is well returne if null value", () => {
  expect(getYearAsText({ v: null, y: 2010 })).toEqual("Year unavailable");
});
