import { getScoreAsText } from "@root/observations";

it("check if the Score of the object is well returned for 238 as String", () => {
  expect(getScoreAsText({ s: 238 })).toEqual("238.00");
});

it("check if the Score of the object does not return a number", () => {
  expect(getScoreAsText({ s: 0 })).not.toEqual(0);
});

it("check if the Score of the object return 3 decimals if decimals == 3", () => {
  expect(getScoreAsText({ s: 38.99439 }, 3)).toEqual("38.994");
});

it("check if it return well fallback param if no param: s", () => {
  expect(getScoreAsText({}, 3)).toEqual("Not scored");
});

it("check if it return well a custom fallback param if no param: s", () => {
  expect(getScoreAsText({}, 3, "custom fallback")).toEqual("custom fallback");
});
