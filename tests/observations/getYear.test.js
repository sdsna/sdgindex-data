import { getYear } from "@root/observations";

it("check if the Year of the object is well returned for 2019", () => {
  expect(getYear({ y: 2019 })).toEqual(2019);
});

it("check if the Year of the object is well returned for 2010", () => {
  expect(getYear({ y: 2010 })).toEqual(2010);
});
