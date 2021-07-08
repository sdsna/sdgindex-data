import { IS_IMPUTED_KEY } from "./config";

/**
 * Check if the given observation is imputed.
 * @param {Object} observation
 * @return {bool} Return true if observation is imputed
 */
export const isImputed = (observation) =>
  Object.prototype.hasOwnProperty.call(observation, IS_IMPUTED_KEY);
