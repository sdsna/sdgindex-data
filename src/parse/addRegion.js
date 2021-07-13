import urlSlug from "url-slug";
import { getRegions } from "../getRegions";

/**
 * Add region to the dataStore
 * @param {Object} dataStore - The store where the data are saved
 * @param {Object} region
 * @param {string} region.id - the unique ID for the region
 * @param {string} region.name -
 * The name of the region. Used to automatically generate the region slug.
 * @param {string} region.type -
 * the type of the region, e.g., `country` or `city`
 * @param {string} [region.slug] -
 * provide a slug to overwrite the auto-generated slug
 * @param {...Object} [region.params] -
 * any other params to add to the region, such as population or GDP
 */
export const addRegion = (dataStore, { id, name, type, slug, ...params }) => {
  if (!slug) slug = urlSlug(name);

  if (!dataStore.regions) dataStore.regions = [];
  dataStore.regions.push({
    id,
    dataId: getRegions(dataStore).length + 1,
    slug,
    name,
    type,
    ...params,
  });
};
