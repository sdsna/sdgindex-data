import { findAssessmentForRegionById } from "./findAssessmentForRegionById";
import { getOverallAssessment } from "./getOverallAssessment";
/**
 * get Overall assessment for a given region
 * @param {Object} dataStore - The store where the data are loaded
 * @param {Object} region - Object of the region {id:..., name:...,  ...}
 * @return {Object} return an object of the overall assessment for the region {id:..., s:..., ...}
 */
export const getOverallAssessmentForRegion = (dataStore, region) =>
  findAssessmentForRegionById(
    dataStore,
    region,
    getOverallAssessment(dataStore).id
  );
