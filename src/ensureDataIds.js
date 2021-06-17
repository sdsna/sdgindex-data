/**
 * Ensure dataId prop is present on the object, otherwise load dataId from store
 * The dataId prop is added permanently to the object, so that we don't have to
 * reload it again and again.
 * @private
 * @param {{Object}} param
 * @param {{Object}} param.dataStore - The store where the data are loaded
 * @param {Object} param.region - The region for which to add dataId
 * @param {Object} param.assessment - The assessment for which to add dataId
 */
export const ensureDataIds = ({ dataStore, region, assessment }) => {
  if (region && !Object.prototype.hasOwnProperty.call(region, "dataId"))
    region.dataId = dataStore.regions.find((r) => r.id === region.id).dataId;
  if (assessment && !Object.prototype.hasOwnProperty.call(assessment, "dataId"))
    assessment.dataId = dataStore.assessments.find(
      (a) => a.id === assessment.id
    ).dataId;
};
