import { findAssessmentForRegionById } from "./findAssessmentForRegionById";
import { getOverallAssessment } from "./getOverallAssessment";

/**
 * Get the overall SDG Index assessment, including the observation for the given
 * region.
 * @param {Object} dataStore - The store where the data are loaded
 * @param {Object} region - The region for which to load the observations
 * @return {Object} return the overall assessment, including the observation for
 *                  the given region
 */
export const getOverallAssessmentForRegion = (dataStore, region) =>
  findAssessmentForRegionById(
    dataStore,
    region,
    getOverallAssessment(dataStore).id
  );
