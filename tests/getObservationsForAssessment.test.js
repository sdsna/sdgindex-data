import { getObservationsForAssessment } from "@sdgindex/data";
import {
  addMockIndicator,
  addMockIndicators,
  addMockObservations,
} from "testHelpers/storeMocks";

it("returns an array of observations", () => {
  const indicator = addMockIndicator();
  const observations = addMockObservations({
    assessment: indicator,
  });
  addMockIndicators();
  addMockObservations();

  expect(getObservationsForAssessment(indicator)).toEqual(observations);
});
