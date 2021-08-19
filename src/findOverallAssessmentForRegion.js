import { findAssessmentForRegionById } from "./findAssessmentForRegionById";
import { findOverallAssessment } from "./findOverallAssessment";

/**
 * Get the overall SDG Index assessment, including the observation for the given
 * region.
 * @param {Object} region - The region for which to load the observations
 * @return {Object} return the overall assessment, including the observation for
 *                  the given region
 */
export const findOverallAssessmentForRegion = (region) =>
  findAssessmentForRegionById(region, findOverallAssessment().id);
