import { getLnobDimension } from "@sdgindex/data/sdgs";

it("returns LNOB 2", () => {
  expect(getLnobDimension(2)).toEqual({
    id: 2,
    category: "pauvreté",
    label: "Extrême pauvreté et privation matérielle",
    description:
      "Prend en compte la pauvreté extrême et non-extrême, l’insécurité alimentaire et la malnutrition, ainsi que l’accès aux services financiers.",
  });
});

it("returns LNOB 4", () => {
  expect(getLnobDimension(4)).toEqual({
    id: 4,
    category: "revenus",
    label: "Inégalité des revenus",
    description:
      "Mesure les inégalités à partir du coefficient de Gini, et deux indicateurs liés aux revenus médian et moyen.",
  });
});
