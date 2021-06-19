import { omit } from "lodash";
import { getRegionsWithTimeseries } from "@root";
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
  timeseries: [...indicatorObservations, ...buildObservations()],
};

test("Returns an array of regions, each including the observation for the given assessment", () => {
  expect(getRegionsWithTimeseries(dataStore, indicator)).toMatchObject(regions);
});

test("Includes observation for each region", () => {
  expect(getRegionsWithTimeseries(dataStore, indicator)).toMatchObject(
    indicatorObservations.map((observation) => omit(observation, "id"))
  );
});
