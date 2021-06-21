import { omit } from "lodash";
import { findIndicatorForRegionBySlug } from "@root";
import {
  buildIndicator,
  buildIndicators,
  buildRegion,
  buildRegions,
  buildObservation,
  buildObservations,
} from "testHelpers/builders";

const indicator = buildIndicator({ slug: "test" });
const region = buildRegion();
const observation = buildObservation({ assessment: indicator, region });
const dataStore = {
  regions: [region, ...buildRegions()],
  assessments: [indicator, ...buildIndicators()],
  observations: [observation, ...buildObservations()],
};

it("finds assessment by ID", () => {
  expect(findIndicatorForRegionBySlug(dataStore, region, "test")).toMatchObject(
    indicator
  );
});

it("includes observation for region", () => {
  expect(findIndicatorForRegionBySlug(dataStore, region, "test")).toMatchObject(
    omit(observation, "id")
  );
});
