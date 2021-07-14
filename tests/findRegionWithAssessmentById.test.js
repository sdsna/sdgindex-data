import { omit } from "lodash";
import { findRegionWithAssessmentById } from "@sdgindex/data";
import {
  addMockIndicator,
  addMockIndicators,
  addMockRegion,
  addMockRegions,
  addMockObservation,
  addMockObservations,
} from "testHelpers/builders";

let indicator, region, observation;

beforeEach(() => {
  indicator = addMockIndicator();
  region = addMockRegion({ id: "MY_REGION" });
  observation = addMockObservation({ assessment: indicator, region });
  addMockRegions();
  addMockIndicators();
  addMockObservations();
});

it("finds region by ID", () => {
  expect(findRegionWithAssessmentById(indicator, "MY_REGION")).toMatchObject(
    region
  );
});

it("includes observation for indicator", () => {
  expect(findRegionWithAssessmentById(indicator, "MY_REGION")).toMatchObject(
    omit(observation, "id")
  );
});
