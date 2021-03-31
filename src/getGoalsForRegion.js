import { getGoals } from "./getGoals";
import { findObservationByRegionAndAssessment } from "./findObservationByRegionAndAssessment";
/**
 * get all goals for a specific region
 * @param {store} dataStore - The store where the data are loaded
 * @param {Object} region - The specific region
 * @return {Array} return an array of all goals for the region given [{id:..., name:..., s:..., ...}, {}, ...]
 */
export const getGoalsForRegion = (dataStore, region) =>
  getGoals(dataStore).map((goal) => ({
    ...findObservationByRegionAndAssessment(dataStore, region, goal),
    ...goal,
  }));
