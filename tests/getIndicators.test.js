import { getIndicators } from "@sdgindex/data";
import {
  buildIndicators,
  buildGoals,
  buildOverallAssessment,
} from "testHelpers/builders";

const indicators = buildIndicators();
const dataStore = {
  assessments: [buildOverallAssessment(), ...buildGoals(), ...indicators],
};

it("returns all indicators", () => {
  expect(getIndicators(dataStore)).toEqual(indicators);
});
