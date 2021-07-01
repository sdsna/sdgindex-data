import { getSdg } from "@sdgindex/data/sdgs";

it("returns label and color for SDG 2", () => {
  expect(getSdg(2)).toEqual({
    number: 2,
    label: "Zero hunger",
    description:
      "End hunger, achieve food security and improved nutrition and promote sustainable agriculture.",
    color: "#DDa63a",
  });
});

it("returns label and color for SDG 16", () => {
  expect(getSdg(16)).toEqual({
    number: 16,
    label: "Peace, justice and strong institutions",
    description:
      "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels.",
    color: "#00689D",
  });
});
