import { getOverallAssessment } from "@root";
import {
  buildIndicators,
  buildGoals,
  buildOverallAssessment,
} from "testHelpers/builders";

const overallAssessment = buildOverallAssessment();
const dataStore = {
  assessments: [overallAssessment, ...buildGoals(), ...buildIndicators()],
};

it("returns the overall assessment", () => {
  expect(getOverallAssessment(dataStore)).toEqual(overallAssessment);
});
