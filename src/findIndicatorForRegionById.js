import { findAssessmentForRegionById } from "./findAssessmentForRegionById";
/**
 * find a specific indicator for a specific region by assessmentId
 * @param {store} dataStore - The store where the data are loaded
 * @param {Object} region - The specific region
 * @param {string} assessmentId - The specific indicator Id
 * @return {Object} return an object of the indicator for the region {id:..., name:..., s:..., ...}
 */
export const findIndicatorForRegionById = findAssessmentForRegionById;
