import { findObservationByRegionAndAssessment } from "@sdgindex/data";
import {
  addMockIndicator,
  addMockRegion,
  addMockObservation,
  addMockObservations,
} from "testHelpers/builders";

it("returns the relevant observation", () => {
  const assessment = addMockIndicator();
  const region = addMockRegion();
  const observation = addMockObservation({ assessment, region });
  addMockObservations();

  expect(findObservationByRegionAndAssessment(region, assessment)).toEqual(
    observation
  );
});
