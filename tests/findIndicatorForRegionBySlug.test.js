import { omit } from "lodash";
import { findIndicatorForRegionBySlug } from "@sdgindex/data";
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
  indicator = addMockIndicator({ slug: "test" });
  region = addMockRegion();
  observation = addMockObservation({ assessment: indicator, region });
  addMockRegions();
  addMockIndicators();
  addMockObservations();
});

it("finds assessment by ID", () => {
  expect(findIndicatorForRegionBySlug(region, "test")).toMatchObject(indicator);
});

it("includes observation for region", () => {
  expect(findIndicatorForRegionBySlug(region, "test")).toMatchObject(
    omit(observation, "id")
  );
});
