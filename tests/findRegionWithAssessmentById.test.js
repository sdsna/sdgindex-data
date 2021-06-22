import { omit } from "lodash";
import { findRegionWithAssessmentById } from "@sdgindex/data";
import {
  buildIndicator,
  buildIndicators,
  buildRegion,
  buildRegions,
  buildObservation,
  buildObservations,
} from "testHelpers/builders";

const indicator = buildIndicator();
const region = buildRegion({ id: "MY_REGION" });
const observation = buildObservation({ assessment: indicator, region });
const dataStore = {
  regions: [region, ...buildRegions()],
  assessments: [indicator, ...buildIndicators()],
  observations: [observation, ...buildObservations()],
};

it("finds region by ID", () => {
  expect(
    findRegionWithAssessmentById(dataStore, indicator, "MY_REGION")
  ).toMatchObject(region);
});

it("includes observation for indicator", () => {
  expect(
    findRegionWithAssessmentById(dataStore, indicator, "MY_REGION")
  ).toMatchObject(omit(observation, "id"));
});
