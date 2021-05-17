import { isGoal } from "./assessments/isGoal";
/**
 * get all goals
 * @param {Object} dataStore - The store where the data are loaded
 * @return {Array} return an array of all goals [{id:..., name:..., ...}, {}, ...]
 */
export const getGoals = (dataStore) =>
  dataStore.assessments.filter((assessment) => isGoal(assessment));
