import { findAssessmentForRegionById } from "./findAssessmentForRegionById";
import { findLnobAssessment } from "./findLnobAssessment";

/**
 * Get the leave-no-one-behind assessment, including the observation for the
 * given region.
 * @param {Object} region - The region for which to load the observations
 * @return {Object} return the LNOB assessment, including the observation for
 *                  the given region
 */
export const findLnobAssessmentForRegion = (region) =>
  findAssessmentForRegionById(region, findLnobAssessment().id);
