/**
 * Check if the given assessment is a goal.
 * @param {Object} assessment
 * @return {bool} Return true if assessment type is "goal"
 */
export const isGoal = (assessment) => assessment.type === "goal";
