import { getRegions } from "./getRegions";

/**
 * Find a region by its slug.
 * @param {String} slug
 * @return {Object} return the region
 */
export const findRegionBySlug = (slug) =>
  getRegions().find((region) => region.slug === slug);
