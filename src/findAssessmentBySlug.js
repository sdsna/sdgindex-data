import { getAssessments } from "./getAssessments";

/**
 * Find an assessment by its slug.
 * @param {String} slug - The UNIQUE slug associated with the assessment
 * @return {Object} return an object of the assessment {id:..., name:..., ...}
 */
export const findAssessmentBySlug = (slug) =>
  getAssessments().find((assessment) => assessment.slug === slug);
