import { isIndicator } from "@root/assessments";

const indicatorAssessment = { type: "indicator" };
const nonindicatorAssessment = { type: "lnob" };

it("check if return true if assessment is indicator", () => {
  expect(isIndicator(indicatorAssessment)).toEqual(true);
});

it("check if return true if assessment is not a indicator", () => {
  expect(isIndicator(nonindicatorAssessment)).toEqual(false);
});
