import { getRegions } from "./getRegions";

/**
 * Get all regions from the store of a given type.
 * @param {String} type - The type of regions to return
 * @return {Array} return an array of regions
 */
export const getRegionsByType = (type) =>
  getRegions().filter((region) => region.type == type);
