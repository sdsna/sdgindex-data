import { omit } from "lodash";
import { getRegionsWithAssessment } from "@sdgindex/data";
import {
  buildIndicator,
  buildIndicators,
  buildObservation,
  buildObservations,
  buildRegions,
} from "testHelpers/builders";

const regions = buildRegions();
const indicator = buildIndicator();
const indicatorObservations = regions.map((region) =>
  buildObservation({ region, assessment: indicator })
);
const dataStore = {
  assessments: [indicator, ...buildIndicators()],
  regions,
  observations: [...indicatorObservations, ...buildObservations()],
};

it("returns all regions", () => {
  expect(getRegionsWithAssessment(dataStore, indicator)).toMatchObject(regions);
});

it("includes observation for each region", () => {
  expect(getRegionsWithAssessment(dataStore, indicator)).toMatchObject(
    indicatorObservations.map((observation) => omit(observation, "id"))
  );
});
