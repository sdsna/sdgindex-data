import { store } from "./store";

/**
 * Get all assessments from the store.
 * @return {Array} return an array of assessments
 */
export const getAssessments = () => store.assessments || [];
