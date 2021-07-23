import { findRegionById } from "./findRegionById";
import { findAssessmentById } from "./findAssessmentById";

/**
 * Ensure dataId prop is present on the object, otherwise load dataId from store
 * The dataId prop is added permanently to the object, so that we don't have to
 * reload it again and again.
 * @private
 * @param {{Object}} param
 * @param {Object} param.region - The region for which to add dataId
 * @param {Object} param.assessment - The assessment for which to add dataId
 */
export const ensureDataIds = ({ region, assessment }) => {
  // For region
  if (region && !Object.prototype.hasOwnProperty.call(region, "dataId"))
    region.dataId = findRegionById(region.id).dataId;

  // For assessment
  if (assessment && !Object.prototype.hasOwnProperty.call(assessment, "dataId"))
    assessment.dataId = findAssessmentById(assessment.id).dataId;
};
