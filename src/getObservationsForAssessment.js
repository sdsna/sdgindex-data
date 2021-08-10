import { store } from "./store";
import { ensureDataIds } from "./ensureDataIds";

/**
 * Get all observations for the given assessment from the store.
 * @param {Object} assessment
 * @return {Array} Return an array of the observations for the given assessment
 */
export const getObservationsForAssessment = (assessment) => {
  ensureDataIds({ assessment });
  return Object.keys(store.observations)
    .filter((key) => key.endsWith(`-${assessment.dataId}`))
    .map((key) => store.observations[key]);
};
