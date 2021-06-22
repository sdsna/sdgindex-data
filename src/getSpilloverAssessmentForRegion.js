import { findAssessmentForRegionById } from "./findAssessmentForRegionById";
import { getSpilloverAssessment } from "./getSpilloverAssessment";

/**
 * Get the spillover index assessment, including the observation for the given
 * region.
 * @param {Object} dataStore - The store where the data are loaded
 * @param {Object} region - The region for which to load the observations
 * @return {Object} return the overallspillover index assessment, including the
 *                  observation for the given region
 */
export const getSpilloverAssessmentForRegion = (dataStore, region) =>
  findAssessmentForRegionById(
    dataStore,
    region,
    getSpilloverAssessment(dataStore).id
  );
