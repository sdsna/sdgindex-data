import { getRegions } from "./getRegions";

/**
 * Find a region by its ID.
 * @param {String} id
 * @return {Object} return the region
 */
export const findRegionById = (id) =>
  getRegions().find((region) => region.id === id);
