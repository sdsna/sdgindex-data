import { getIndicators } from "./getIndicators";

/**
 * Get all indicators for the given lnob dimension from the store.
 * @param {Object} dimension - The lnob dimension for which to load the indicators
 * @return {Array} return an array of indicators
 */
export const getIndicatorsByLnobDimension = (dimension) =>
  getIndicators().filter((indicator) => indicator.goalNumber === dimension.id);
