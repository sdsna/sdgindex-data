/**
 * find a Region by it slug
 * @param {Object} dataStore - The store where the data are loaded
 * @param {String} slug - The UNIQUE slug associate to the region
 * @return {Object} return an object of the region {id:..., name:..., ...}
 */
export const findRegionBySlug = (dataStore, slug) =>
  dataStore.regions.find((region) => region.slug === slug);
