import { omit } from "lodash";
import { findIndicatorForRegionById } from "@sdgindex/data";
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
  indicator = addMockIndicator({ id: "test" });
  region = addMockRegion();
  observation = addMockObservation({ assessment: indicator, region });
  addMockRegions();
  addMockIndicators();
  addMockObservations();
});

it("finds assessment by ID", () => {
  expect(findIndicatorForRegionById(region, "test")).toMatchObject(indicator);
});

it("includes observation for region", () => {
  expect(findIndicatorForRegionById(region, "test")).toMatchObject(
    omit(observation, "id")
  );
});
