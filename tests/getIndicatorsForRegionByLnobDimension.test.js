import { omit } from "lodash";
import { getIndicatorsForRegionByLnobDimension } from "@sdgindex/data";
import {
  addMockLnobDimension,
  addMockIndicatorsForLnobDimension,
  addMockObservation,
  addMockOverallAssessment,
  addMockRegion,
  addMockRegions,
} from "testHelpers/storeMocks";

let lnob, indicators, region, indicatorObservations;

beforeEach(() => {
  addMockOverallAssessment();
  addMockRegions();

  lnob = addMockLnobDimension();
  region = addMockRegion();
  indicators = addMockIndicatorsForLnobDimension({ lnob });

  // Set up observations for region with lnob dimension
  indicatorObservations = indicators.map((indicator) =>
    addMockObservation({ assessment: indicator, region })
  );

  // Set up other observations for region but for another lnob dimension
  const otherIndicators = addMockIndicatorsForLnobDimension();
  otherIndicators.forEach((indicator) =>
    addMockObservation({ assessment: indicator, region })
  );
});

it("returns all indicators for the given lnob dimension", () => {
  expect(getIndicatorsForRegionByLnobDimension(region, lnob)).toMatchObject(
    indicators
  );
});

it("returns observations for each indicator of the given lnob dimension", () => {
  expect(getIndicatorsForRegionByLnobDimension(region, lnob)).toMatchObject(
    indicatorObservations.map((observation) => omit(observation, "id"))
  );
});
