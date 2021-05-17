import { getIndicators } from "./getIndicators";
/**
 * find an Indicator by slug
 * @param {Object} dataStore - The store where the data are loaded
 * @param {String} slug - The UNIQUE slug associate to the assessment
 * @return {Object} return an object of the indicator {id:..., name:..., ...}
 */
export const findIndicatorBySlug = (dataStore, slug) =>
  getIndicators(dataStore).find((indicator) => indicator.slug === slug);
