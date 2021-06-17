/**
 * Check if the given observation is imputed.
 * @param {Object} observation
 * @return {bool} Return true if observation is imputed
 */
export const isImputed = (observation) =>
  Object.prototype.hasOwnProperty.call(observation, "i");
