import { findAssessmentForRegionById } from "./findAssessmentForRegionById";
/**
 * find a specific goal for a specific region by assessmentId
 * @param {Object} dataStore - The store where the data are loaded
 * @param {Object} region - The specific region
 * @param {string} assessmentId - The specific goal Id
 * @return {Object} return an object of the goal for the region {id:..., name:..., s:..., ...}
 */
export const findGoalForRegionById = findAssessmentForRegionById;
