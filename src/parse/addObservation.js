const PROPERTIES = {
  score: "s",
  rank: "r",
  color: "c",
  value: "v",
  arrow: "a",
  year: "y",
  impute: "i",
};

/**
 * Add observation to the dataStore
 * @param {Object} dataStore - The store where the data are saved
 */
export const addObservation = (
  dataStore,
  { region, assessment, ...params }
) => {
  Object.entries(PROPERTIES).map(([longName, shortName]) => {
    if (Object.prototype.hasOwnProperty.call(params, longName)) {
      params[shortName] = params[longName];
      delete params[longName];
    }
  });
  dataStore.observations.push({
    id: `${region.dataId}-${assessment.dataId}`,
    ...params,
  });
};
