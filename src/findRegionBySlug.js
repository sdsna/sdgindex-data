/**
 * Find a region by its slug.
 * @param {Object} dataStore - The store where the data are loaded
 * @param {String} slug
 * @return {Object} return the region
 */
export const findRegionBySlug = (dataStore, slug) =>
  dataStore.regions.find((region) => region.slug === slug);
