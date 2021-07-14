import { getIndicators } from "./getIndicators";

/**
 * Find an indicator by its slug.
 * @param {String} slug
 * @return {Object} return the indicator
 */
export const findIndicatorBySlug = (slug) =>
  getIndicators().find((indicator) => indicator.slug === slug);
