import { store } from "./store";
import { ensureDataIds } from "./ensureDataIds";
import { decodeObject } from "./utilities/decodeObject";

/**
 * Find the observation for the given region and assessment.
 * @param {Object} region
 * @param {Object} assessment
 * @return {?Object} return the observation
 */
export const findObservationByRegionAndAssessment = (region, assessment) => {
  ensureDataIds({ region, assessment });

  const observation =
    store.observations[`${region.dataId}-${assessment.dataId}`];

  // Return null, if no observation exists for the region and assessment
  if (observation == null) return null;

  // If observations are encoded, decode observation prior to returning
  if (Object.prototype.hasOwnProperty.call(store, "observationEncoding"))
    return decodeObject(observation, store.observationEncoding);

  // Otherwise, return observation as is
  return observation;
};
