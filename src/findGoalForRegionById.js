import { findAssessmentForRegionById } from "./findAssessmentForRegionById";

/**
 * Find a specific goal by assessment ID and include the observation for the
 * given region.
 * @param {Object} region - The region for which to load the observation
 * @param {string} goalId - The ID for which to find the goal
 * @return {Object} return the goal, including the observation for the
 *                  given region
 */
export const findGoalForRegionById = (region, goalId) =>
  findAssessmentForRegionById(region, goalId);
