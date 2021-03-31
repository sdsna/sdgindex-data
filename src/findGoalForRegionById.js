import { findAssessmentForRegionById } from "./findAssessmentForRegionById";
/**
 * find a specific goal for a specific region by assessmentId
 * @param {store} dataStore - The store where the data are loaded
 * @param {Object} region - The specific region
 * @param {Id} assessmentId - The specific goal Id
 * @return {Object} return an object of the goal for the region {id:..., name:..., s:..., ...}
 */
export const findGoalForRegionById = findAssessmentForRegionById;
