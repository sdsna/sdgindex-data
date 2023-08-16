import { omit } from "lodash";
import { getLnobDimensionsForRegion } from "@sdgindex/data";
import {
  addMockLnobDimensions,
  addMockObservation,
  addMockOverallAssessment,
  addMockRegion,
} from "testHelpers/storeMocks";

let lnobs, region, lnobObservations;

beforeEach(() => {
  lnobs = addMockLnobDimensions();
  region = addMockRegion();
  lnobObservations = lnobs.map((lnob) =>
    addMockObservation({ assessment: lnob, region })
  );
  addMockOverallAssessment();

  // Add observations for other regions
  lnobs.forEach((lnob) => addMockObservation({ assessment: lnob }));
});

it("returns all lnob dimensions", () => {
  expect(getLnobDimensionsForRegion(region)).toMatchObject(lnobs);
});

it("returns observations for each lnob dimension", () => {
  expect(getLnobDimensionsForRegion(region)).toMatchObject(
    lnobObservations.map((observation) => omit(observation, "id"))
  );
});
