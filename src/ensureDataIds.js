/**
 * Ensure dataId prop is present on the object, otherwise load dataId from store
 * The dataId prop is added permanently to the object, so that we don't have to
 * reload it again and again.
 * @param {store} dataStore - The store where the data are loaded
 * @param {Object} region - The region object {id:..., name:..., ...}
 * @param {Object} assessment - The assessment object {id:..., name:..., ...}
 */
const ensureDataIds = ({ dataStore, region, assessment }) => {
  if (region && !region.hasOwnProperty("dataId"))
    region.dataId = dataStore.regions.find((r) => r.id === region.id).dataId;
  if (assessment && !assessment.hasOwnProperty("dataId"))
    assessment.dataId = dataStore.assessments.find(
      (a) => a.id === assessment.id
    ).dataId;
};
