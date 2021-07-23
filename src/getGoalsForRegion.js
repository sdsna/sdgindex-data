import { getGoals } from "./getGoals";
import { findObservationByRegionAndAssessment } from "./findObservationByRegionAndAssessment";

/**
 * Get all goal assessments from the store, each including the respective
 * observation for the given region.
 * @param {Object} region - The region for which to load the observations
 * @return {Array} return an array of goals, each including the respective
 *                 observation for the given region
 */
export const getGoalsForRegion = (region) =>
  getGoals().map((goal) => ({
    ...findObservationByRegionAndAssessment(region, goal),
    ...goal,
  }));
