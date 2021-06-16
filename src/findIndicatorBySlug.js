import { getIndicators } from "./getIndicators";

/**
 * Find an indicator by its slug.
 * @param {Object} dataStore
 * @param {String} slug
 * @return {Object} return the indicator
 */
export const findIndicatorBySlug = (dataStore, slug) =>
  getIndicators(dataStore).find((indicator) => indicator.slug === slug);
