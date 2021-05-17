import { getValueAsText } from "@root/observations";

it("check if the Value of the object is well returned for 238 as String", () => {
  expect(getValueAsText({ v: 238 })).toEqual("238.00");
});

it("check if the Value of the object does not return a number", () => {
  expect(getValueAsText({ v: 0 })).not.toEqual(0);
});

it("check if the Value of the object return 3 decimals if decimals == 3", () => {
  expect(getValueAsText({ v: 38.99439 }, 3)).toEqual("38.994");
});

it("check if it return well fallback param if no param: v", () => {
  expect(getValueAsText({}, 3)).toEqual("Value unavailable");
});

it("check if it return well a custom fallback param if no param: v", () => {
  expect(getValueAsText({}, 3, "custom fallback")).toEqual("custom fallback");
});
