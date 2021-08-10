import {
  SCORE_KEY,
  RANK_KEY,
  RATING_KEY,
  TREND_KEY,
  VALUE_KEY,
  YEAR_KEY,
  IS_IMPUTED_KEY,
} from "../observations/config";
import { roundNumber } from "./roundNumber";
import { store } from "../store";

// Property names are shortened to a single letter to save space
const PROPERTIES = {
  score: {
    name: SCORE_KEY,
    formatter: (score) => roundNumber(score, 2),
  },
  rank: {
    name: RANK_KEY,
    formatter: (rank) => (rank != null ? parseInt(rank) : null),
  },
  rating: {
    name: RATING_KEY,
    formatter: (rating) => {
      if (rating == null || rating === "grey" || rating === "") return "gray";
      return rating;
    },
  },
  trend: {
    name: TREND_KEY,
    formatter: (trend) => {
      if (trend == null || trend === "") return null;
      return trend;
    },
  },
  value: {
    name: VALUE_KEY,
    formatter: (value) => roundNumber(value, 2),
  },
  year: {
    name: YEAR_KEY,
  },
  isImputed: {
    name: IS_IMPUTED_KEY,
    formatter: (isImputed) => (isImputed ? 1 : 0),
  },
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
  // Shorten property names and format values
  Object.keys(PROPERTIES).map((propertyName) => {
    if (Object.prototype.hasOwnProperty.call(observation, propertyName)) {
      const { name: shortName, formatter } = PROPERTIES[propertyName];

      // Format value using property formatter
      if (formatter != null)
        observation[propertyName] = formatter(observation[propertyName]);

      // Shorten property name
      observation[shortName] = observation[propertyName];
      delete observation[propertyName];
    }
  });

  // Remove isImputed flag, unless observation is imputed
  const isImputedKey = PROPERTIES.isImputed.name;
  if (observation[isImputedKey] !== 1) delete observation[isImputedKey];

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
