import { ensureDataIds } from "./ensureDataIds";

/**
 * Get all observations of a specific assessment from the dataStore.
 * @param {Object} dataStore - The store where the data are loaded
 * @param {Object} assessment
 * @return {Array} Returns an array of the observations for the specific assessment
 */

export const getObservationsForAssessment = (dataStore, assessment) => {
  ensureDataIds({ dataStore, assessment });
  return dataStore.observations.filter((o) =>
    o.id.endsWith(`-${assessment.dataId}`)
  );
};
