import { omit } from "lodash";
import { findAssessmentForRegionById } from "@sdgindex/data";
import {
  buildIndicator,
  buildIndicators,
  buildRegion,
  buildRegions,
  buildObservation,
  buildObservations,
} from "testHelpers/builders";

const indicator = buildIndicator({ id: "test" });
const region = buildRegion();
const observation = buildObservation({ assessment: indicator, region });
const dataStore = {
  regions: [region, ...buildRegions()],
  assessments: [indicator, ...buildIndicators()],
  observations: [observation, ...buildObservations()],
};

it("finds assessment by ID", () => {
  expect(findAssessmentForRegionById(dataStore, region, "test")).toMatchObject(
    indicator
  );
});

it("includes observation for region", () => {
  expect(findAssessmentForRegionById(dataStore, region, "test")).toMatchObject(
    omit(observation, "id")
  );
});
