import { getIndicators } from "./getIndicators";
import { isTrendIndicator } from "./assessments/isTrendIndicator";

/**
 * Get all trend indicators from the store.
 * @return {Array} return an array of trend indicators
 */
export const getTrendIndicators = () =>
  getIndicators().filter(isTrendIndicator);
