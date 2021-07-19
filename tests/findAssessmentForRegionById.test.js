import { omit } from "lodash";
import { findAssessmentForRegionById } from "@sdgindex/data";
import {
  addMockIndicator,
  addMockIndicators,
  addMockRegion,
  addMockRegions,
  addMockObservation,
  addMockObservations,
} from "testHelpers/storeMocks";

let indicator, region, observation;

beforeEach(() => {
  indicator = addMockIndicator({ id: "test" });
  region = addMockRegion();
  observation = addMockObservation({ assessment: indicator, region });
  addMockRegions();
  addMockIndicators();
  addMockObservations();
});

it("finds assessment by ID", () => {
  expect(findAssessmentForRegionById(region, "test")).toMatchObject(indicator);
});

it("includes observation for region", () => {
  expect(findAssessmentForRegionById(region, "test")).toMatchObject(
    omit(observation, "id")
  );
});
