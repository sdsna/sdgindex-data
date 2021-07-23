import { findAssessmentForRegionById } from "./findAssessmentForRegionById";
import { getOverallAssessment } from "./getOverallAssessment";

/**
 * Get the overall SDG Index assessment, including the observation for the given
 * region.
 * @param {Object} region - The region for which to load the observations
 * @return {Object} return the overall assessment, including the observation for
 *                  the given region
 */
export const getOverallAssessmentForRegion = (region) =>
  findAssessmentForRegionById(region, getOverallAssessment().id);
