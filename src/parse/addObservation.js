import { roundNumber } from "./roundNumber";
import { store } from "../store";

// Formatting to apply to observation values, e.g., rounding, encoding, etc...
const FORMATTERS = {
  score: (score) => roundNumber(score, 2),
  rank: (rank) => (rank != null ? parseInt(rank) : null),
  rating: (rating) => {
    if (rating == null || rating === "grey" || rating === "") return "gray";
    return rating;
  },
  trend: (trend) => {
    if (trend == null || trend === "") return null;
    return trend;
  },
  value: (value) => roundNumber(value, 2),
  isImputed: (isImputed) => (isImputed ? 1 : null),
};

/**
 * Add an observation to the store
 * @param {Object} observation
 * @param {Object} observation.region -
 * the region to which the observation belongs
 * @param {Object} observation.assessment -
 * the assessment to which the observation belongs
 * @param {number} [observation.score] -
 * the score of the region on the assessment
 * @param {number} [observation.rank] -
 * the rank of the region on the assessment
 * @param {string} [observation.rating] -
 * the rating of the region on the assessment,
 * e.g., `green`, `yellow`, `orange`, `red`, or `gray`
 * @param {?string} [observation.trend] -
 * the trend of the region on the assessment,
 * e.g., `↑`, `➚`, `→`, `↓`, or `null`
 * @param {number} [observation.value] -
 * the raw value of the region on the assessment (applicable to indicators only)
 * @param {number} [observation.year] -
 * the raw value of the region on the assessment (applicable to indicators only)
 * @param {boolean} [observation.isImputed=false] -
 * whether the observation is imputed (`true` or `false`)
 * @param {...Object} [observation.params] -
 * any other properties to store on the observation
 * @return {Object} the observation that was added to the store
 */
export const addObservation = ({ region, assessment, ...observation }) => {
  // Format values (rounding, encoding, etc...)
  Object.entries(FORMATTERS).forEach(([key, formatter]) => {
    // Skip if property is not defined
    if (!Object.prototype.hasOwnProperty.call(observation, key)) return;

    // Format value using property formatter
    observation[key] = formatter(observation[key]);
  });

  // Prepare observations in store
  if (!store.observations) store.observations = {};

  // Verify ID does not yet exist
  const id = `${region.dataId}-${assessment.dataId}`;
  if (Object.prototype.hasOwnProperty.call(store.observations, id))
    throw new Error(`Observation with id ${id} already exists`);

  // Add observation
  store.observations[id] = observation;

  return observation;
};
