import { store } from "./store";
import { ensureDataIds } from "./ensureDataIds";

/**
 * Get all observations for the given assessment from the store.
 * @param {Object} assessment
 * @return {Array} Return an array of the observations for the given assessment
 */
export const getObservationsForAssessment = (assessment) => {
  ensureDataIds({ assessment });
  return store.observations.filter((observation) =>
    observation.id.endsWith(`-${assessment.dataId}`)
  );
};
