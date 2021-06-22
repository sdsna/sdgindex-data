import { omit } from "lodash";
import { getTrendIndicators } from "@root";
import {
  buildIndicators,
  buildGoals,
  buildOverallAssessment,
} from "testHelpers/builders";

const trendIndicators = buildIndicators({ hasTrend: true });
const dataStore = {
  assessments: [
    buildOverallAssessment(),
    ...buildGoals(),
    ...trendIndicators,
    buildIndicators(),
  ],
};

it("returns all trend indicators", () => {
  expect(getTrendIndicators(dataStore)).toEqual(trendIndicators);
});
