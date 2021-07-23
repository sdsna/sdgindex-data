import { getIndicators } from "./getIndicators";

/**
 * Find an indicator by its ID.
 * @param {String} id
 * @return {Object} return the indicator
 */
export const findIndicatorById = (id) =>
  getIndicators().find((indicator) => indicator.id === id);
