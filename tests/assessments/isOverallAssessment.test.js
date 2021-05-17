import { isOverallAssessment } from "@root/assessments";

const overallAssessment = { type: "custom", id: "TOT" };
const nonOverallAssessment = { type: "lnob" };

it("check if return true if assessment is overall", () => {
  expect(isOverallAssessment(overallAssessment)).toEqual(true);
});

it("check if return true if assessment is not a overall", () => {
  expect(isOverallAssessment(nonOverallAssessment)).toEqual(false);
});
