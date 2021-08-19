import { findAssessmentForRegionById } from "./findAssessmentForRegionById";
import { findSpilloverAssessment } from "./findSpilloverAssessment";

/**
 * Get the spillover index assessment, including the observation for the given
 * region.
 * @param {Object} region - The region for which to load the observations
 * @return {Object} return the overallspillover index assessment, including the
 *                  observation for the given region
 */
export const findSpilloverAssessmentForRegion = (region) =>
  findAssessmentForRegionById(region, findSpilloverAssessment().id);
