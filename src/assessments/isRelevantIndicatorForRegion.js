import { isGlobalOnly } from "./isGlobalOnly";
import { isOecd } from "./isOecd";
import { isOecdOnly } from "./isOecdOnly";

/**
 * Check whether the given assessment is a relevant indicator for the region.
 * @param {Object} assessment
 * @param {Object} region
 * @returns {bool} Returns true if the assessment is a relevant indicator for the region
 */

export const isRelevantIndicatorForRegion = (assessment, region) => {
  if (isOecdOnly(assessment)) return isOecd(region);
  if (isGlobalOnly(assessment)) return !isOecd(region);

  return true;
};
