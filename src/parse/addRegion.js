import urlSlug from "url-slug";
import { store } from "../store";
import { getRegions } from "../getRegions";

/**
 * Add a region to the store
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
 * @return {Object} the region that was added to the store
 */
export const addRegion = ({ id, name, type, slug, ...params }) => {
  if (!slug) slug = urlSlug(name);

  const region = {
    id,
    dataId: getRegions().length + 1,
    slug,
    name,
    type,
    ...params,
  };

  if (!store.regions) store.regions = [];
  store.regions.push(region);

  return region;
};
