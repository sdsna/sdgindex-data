import { addIndicator } from "@sdgindex/data/parse";
import { buildIndicator } from "testHelpers/builders";

it("add indicator to the dataStore", () => {
  const dataStore = { assessments: [] };
  addIndicator(dataStore, {
    id: "sdg14_cleanwat",
    dataId: 98,
    goalNumber: 14,
    label: "Ocean Health Index: Clean Waters score",
    reference: "Ocean Health Index",
    link: "http://ohi-science.org/ohi-global/download",
    description:
      "The clean waters subgoal of the Ocean Health Index measures to what degree marine waters under national jurisdictions have been contaminated by chemicals, excessive nutrients (eutrophication), human pathogens, and trash.",
  });

  const indicator = buildIndicator({
    id: "sdg14_cleanwat",
    dataId: 98,
    goalNumber: 14,
    label: "Ocean Health Index: Clean Waters score",
    reference: "Ocean Health Index",
    link: "http://ohi-science.org/ohi-global/download",
    description:
      "The clean waters subgoal of the Ocean Health Index measures to what degree marine waters under national jurisdictions have been contaminated by chemicals, excessive nutrients (eutrophication), human pathogens, and trash.",
  });
  delete indicator.slug;

  expect(dataStore.assessments[0]).toEqual(indicator);
});
