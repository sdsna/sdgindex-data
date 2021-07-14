import { getAssessments } from "./getAssessments";
import { isGoal } from "./assessments/isGoal";

/**
 * Get all goal assessments from the store.
 * @return {Array} return an array of goals
 */
export const getGoals = () => getAssessments().filter(isGoal);
