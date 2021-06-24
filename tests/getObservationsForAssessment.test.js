import { getObservationsForAssessment } from "@sdgindex/data";
import {
  buildIndicator,
  buildIndicators,
  buildObservations,
} from "testHelpers/builders";

const indicator = buildIndicator();
const observations = buildObservations({
  assessment: indicator,
});
const dataStore = {
  assessments: [indicator, ...buildIndicators()],
  observations: [...observations, ...buildObservations()],
};

it("returns an array of observations", () => {
  expect(getObservationsForAssessment(dataStore, indicator)).toEqual(
    observations
  );
});
