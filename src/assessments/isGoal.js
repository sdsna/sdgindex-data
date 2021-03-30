/**
 * Check if the assessment given is a goal
 * @param {Object} assessment - The object assessment
 * @return {bool} Return true if goal and false if not
 */
export const isGoal = (assessment) => assessment.type === "goal";
