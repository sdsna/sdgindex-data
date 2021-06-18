import { getSdg } from "@root/sdgs";

it("returns label and color for SDG 2", () => {
  expect(getSdg(2)).toEqual({ label: "Zero hunger", color: "#DDa63a" });
});

it("returns label and color for SDG 16", () => {
  expect(getSdg(16)).toEqual({
    label: "Peace, justice and strong institutions",
    color: "#00689D",
  });
});
