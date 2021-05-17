import { dataStore } from "./dataStore";
import { getRegionsWithAssessment } from "../src/getRegionsWithAssessment";

it("check if it returns all regions", () => {
  const assessement = {
    id: "sdg4v3_hsgrad",
    dataId: 21,
    goalNumber: 4,
    slug: "sdg4v3_hsgrad",
    label: "4-year High School Graduation Rate",
    unit: "% or rate",
    description:
      "Public high school 4-year adjusted cohort graduation rate (ACGR). ACGR is the percentage of public high school freshmen who graduate with a regular diploma within 4 years of starting 9th grade.",
    type: "indicator",
    year: "2016-17",
    longTermObjective: 89.92,
    reference: "National Center for Education Statistics",
  };

  expect(getRegionsWithAssessment(dataStore, assessement).length).toEqual(50);
  getRegionsWithAssessment(dataStore, assessement).map(
    (region) => expect(region.s).shouldExist
  );
});
