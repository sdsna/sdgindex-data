/**
 * Find an assessment by its ID.
 * @param {Object} dataStore - The store where the data are loaded
 * @param {String} id - The UNIQUE id associated with the assessment
 * @return {Object} return an object of the assessment {id:..., name:..., ...}
 */
export const findAssessmentById = (dataStore, id) =>
  dataStore.assessments.find((assessment) => assessment.id === id);
