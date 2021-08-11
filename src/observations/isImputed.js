import { IS_IMPUTED_KEY } from "./config";

/**
 * Check if the given observation is imputed.
 * @param {Object} observation
 * @return {bool} Return true if observation is imputed
 */
export const isImputed = (observation) => observation[IS_IMPUTED_KEY] === 1;
