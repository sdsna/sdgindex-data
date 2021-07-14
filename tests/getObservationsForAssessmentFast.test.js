import { getObservationsForAssessment } from "@sdgindex/data";
import {
  addMockIndicator,
  addMockIndicators,
  addMockObservations,
} from "testHelpers/builders";

it("returns an array of observations", () => {
  const indicator = addMockIndicator();
  const observations = addMockObservations({
    assessment: indicator,
  });
  addMockIndicators();
  addMockObservations();

  expect(getObservationsForAssessment(indicator)).toEqual(observations);
});
