import { getGoals } from "./getGoals";
import { findObservationByRegionAndAssessment } from "./findObservationByRegionAndAssessment";

/**
 * Get all goal assessments from the dataStore, each including the respective
 * observation for the given region.
 * @param {Object} dataStore - The store where the data are loaded
 * @param {Object} region - The region for which to load the observations
 * @return {Array} return an array of goals, each including the respective
 *                 observation for the given region
 */
export const getGoalsForRegion = (dataStore, region) =>
  getGoals(dataStore).map((goal) => ({
    ...findObservationByRegionAndAssessment(dataStore, region, goal),
    ...goal,
  }));
