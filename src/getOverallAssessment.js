/**
 * get Overall assessment
 * @param {store} dataStore - The store where the data are loaded
 * @return {Object} return an object of the overall assessment {id:..., label:..., ...}
 */
export const getOverallAssessment = (dataStore) =>
  dataStore.assessments.find((assessment) => isOverallAssessment(assessment));
