import { getLnobDimensions } from "./getLnobDimensions";
import { findObservationByRegionAndAssessment } from "./findObservationByRegionAndAssessment";

/**
 * Get all lnob assessments from the store, each including the respective
 * observation for the given region.
 * @param {Object} region - The region for which to load the observations
 * @return {Array} return an array of lnob, each including the respective
 *                 observation for the given region
 */
export const getLnobDimensionsForRegion = (region) =>
  getLnobDimensions().map((lnob) => ({
    ...findObservationByRegionAndAssessment(region, lnob),
    ...lnob,
  }));
