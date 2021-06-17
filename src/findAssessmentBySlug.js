/**
 * Find an assessment by its slug.
 * @param {Object} dataStore - The store where the data are loaded
 * @param {String} slug - The UNIQUE slug associated with the assessment
 * @return {Object} return an object of the assessment {id:..., name:..., ...}
 */
export const findAssessmentBySlug = (dataStore, slug) =>
  dataStore.assessments.find((assessment) => assessment.slug === slug);
