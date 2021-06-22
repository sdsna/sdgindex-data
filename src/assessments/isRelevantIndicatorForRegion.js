import { isGlobalOnly } from "./isGlobalOnly";
import { isOecdOnly } from "./isOecdOnly";
import { isOecd } from "../regions/isOecd";

/**
 * Check whether the given assessment is a relevant indicator for the region.
 * @param {Object} assessment
 * @param {Object} region
 * @returns {bool} Return true if the assessment is a relevant indicator for the
 *                 region
 */
export const isRelevantIndicatorForRegion = (assessment, region) => {
  if (isOecdOnly(assessment)) return isOecd(region);
  if (isGlobalOnly(assessment)) return !isOecd(region);

  return true;
};
