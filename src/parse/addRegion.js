import urlSlug from "url-slug";
import { getRegions } from "../getRegions";

/**
 * Add region to the dataStore
 * @param {Object} dataStore - The store where the data are saved
 */
export const addRegion = (dataStore, { name, ...params }) => {
  dataStore.regions.push({
    name,
    slug: urlSlug(name),
    dataId: getRegions(dataStore).length + 1,
    ...params,
  });
};
