import { findObservationByRegionAndAssessment } from "@sdgindex/data";
import {
  buildIndicator,
  buildRegion,
  buildObservation,
  buildObservations,
} from "testHelpers/builders";

const assessment = buildIndicator();
const region = buildRegion();
const observation = buildObservation({ assessment, region });
const dataStore = {
  observations: [observation, ...buildObservations()],
};

it("returns the relevant observation", () => {
  expect(
    findObservationByRegionAndAssessment(dataStore, region, assessment)
  ).toEqual(observation);
});
