import { isImputed } from "@root/observations";

it("check if return true if value is imputed", () => {
  expect(isImputed({ i: true })).toEqual(true);
});

it("check if return false if value is not imputed", () => {
  expect(isImputed({})).toEqual(false);
});
