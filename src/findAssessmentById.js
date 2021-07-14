import { getAssessments } from "./getAssessments";

/**
 * Find an assessment by its ID.
 * @param {String} id - The UNIQUE id associated with the assessment
 * @return {Object} return an object of the assessment {id:..., name:..., ...}
 */
export const findAssessmentById = (id) =>
  getAssessments().find((assessment) => assessment.id === id);
