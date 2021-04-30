import { findRegionById } from "./findRegionById";
import { findObservationByRegionAndAssessment } from "./findObservationByRegionAndAssessment";
/**
 * get specific region by Id with a specific assessment
 * @param {store} dataStore - The store where the data are loaded
 * @param {Id} regionId - The specific region ID
 * @return {Object} return an object with the Region Object and the assessment Object {{id:..., name:..., s:..., ...}, {id:..., ...}}
 */
export const findRegionWithAssessmentById = (
  dataStore,
  assessment,
  regionId
) => {
  const region = findRegionById(dataStore, regionId);

  return {
    ...findObservationByRegionAndAssessment(dataStore, region, assessment),
    ...region,
  };
};
