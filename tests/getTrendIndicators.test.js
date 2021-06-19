import { omit } from "lodash";
import { getTrendIndicators } from "@root";
import {
  buildIndicators,
  buildGoals,
  buildOverallAssessment,
} from "testHelpers/builders";

const indicators = buildIndicators({ hasTrend: true });
const dataStore = {
  assessments: [
    buildOverallAssessment(),
    ...buildGoals(),
    ...indicators,
    buildIndicators(),
  ],
};

test("Returns an array of trend indicators", () => {
  expect(getTrendIndicators(dataStore)).toEqual(indicators);
  expect(getTrendIndicators(dataStore)).toHaveLength(5);
});

test("Includes observation for region", () => {
  expect(getTrendIndicators(dataStore)).toMatchObject(omit(indicators, "id"));
});
