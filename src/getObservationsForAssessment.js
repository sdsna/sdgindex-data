import { ensureDataIds } from "./ensureDataIds";

/**
 * Get all observations for the given assessment from the dataStore.
 * @param {Object} dataStore - The store where the data are loaded
 * @param {Object} assessment
 * @return {Array} Return an array of the observations for the given assessment
 */
export const getObservationsForAssessment = (dataStore, assessment) => {
  ensureDataIds({ dataStore, assessment });
  return dataStore.observations.filter((observation) =>
    observation.id.endsWith(`-${assessment.dataId}`)
  );
};
