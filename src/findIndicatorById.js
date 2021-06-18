import { getIndicators } from "./getIndicators";

/**
 * Find an indicator by its Id.
 * @param {Object} dataStore
 * @param {String} id
 * @return {Object} Returns the indicator
 */

export const findIndicatorById = (dataStore, id) =>
  getIndicators(dataStore).find((indicator) => indicator.id === id);
