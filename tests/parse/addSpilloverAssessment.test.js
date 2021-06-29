import { addSpilloverAssessment } from "@sdgindex/data/parse";
import { buildSpilloverAssessment } from "testHelpers/builders";

it("add the spillover assessment to the dataStore", () => {
  const dataStore = { assessments: [] };
  addSpilloverAssessment(dataStore);
  expect(dataStore.assessments[0]).toEqual(
    buildSpilloverAssessment({
      dataId: "SPI",
      label: "Spillover score",
      description:
        "Each country's actions can have positive or negative effects on other countries' abilities to achieve the SDGs. The Spillover Index assesses such spillovers along three dimensions: environmental & social impacts embodied into trade, economy & finance, and security. A higher score means that a country causes more positive and fewer negative spillover effects.",
    })
  );
});
