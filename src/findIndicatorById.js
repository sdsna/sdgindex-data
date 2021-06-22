import { getIndicators } from "./getIndicators";

/**
 * Find an indicator by its ID.
 * @param {Object} dataStore
 * @param {String} id
 * @return {Object} return the indicator
 */
export const findIndicatorById = (dataStore, id) =>
  getIndicators(dataStore).find((indicator) => indicator.id === id);
