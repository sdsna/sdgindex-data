import { getSdg } from "@root/sdgs";

it("check if return Object of 2 == sdg2", () => {
  expect(getSdg(2)).toEqual({ label: "Zero hunger", color: "#DDa63a" });
});

it("check if return Object of 16 == sdg16", () => {
  expect(getSdg(16)).toEqual({
    label: "Peace, justice and strong institutions",
    color: "#00689D",
  });
});
