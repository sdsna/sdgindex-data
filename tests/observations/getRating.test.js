import { getRating } from "@root/observations";

it("check if the Rating of the object is well returned for green", () => {
  expect(getRating({ c: "green" })).toEqual("green");
});

it("check if the Rating of the object is well returned for gray", () => {
  expect(getRating({ c: "gray" })).toEqual("gray");
});
