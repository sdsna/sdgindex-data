import { getSpilloverAssessment } from "@sdgindex/data";
import {
  buildIndicators,
  buildGoals,
  buildOverallAssessment,
  buildSpilloverAssessment,
} from "testHelpers/builders";

const spilloverAssessment = buildSpilloverAssessment();
const dataStore = {
  assessments: [
    buildOverallAssessment(),
    spilloverAssessment,
    ...buildGoals(),
    ...buildIndicators(),
  ],
};

it("returns the overall assessment", () => {
  expect(getSpilloverAssessment(dataStore)).toEqual(spilloverAssessment);
});
