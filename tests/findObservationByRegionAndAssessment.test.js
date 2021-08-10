import { findObservationByRegionAndAssessment } from "@sdgindex/data";
import {
  addMockIndicator,
  addMockRegion,
  addMockObservation,
  addMockObservations,
  mockEncodeObservations,
} from "testHelpers/storeMocks";

it("returns the relevant observation", () => {
  const assessment = addMockIndicator();
  const region = addMockRegion();
  const observation = addMockObservation({ assessment, region });
  addMockObservations();

  expect(findObservationByRegionAndAssessment(region, assessment)).toEqual(
    observation
  );
});

describe("when observations are encoded", () => {
  it("returns the decoded observation", () => {
    const assessment = addMockIndicator();
    const region = addMockRegion();
    const observation = addMockObservation({ assessment, region });
    addMockObservations();

    mockEncodeObservations();

    expect(findObservationByRegionAndAssessment(region, assessment)).toEqual(
      observation
    );
  });
});
