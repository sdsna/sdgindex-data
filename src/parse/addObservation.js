import { KEYS } from "./keys";

/**
 * Add observation to the dataStore
 * @param {Object} dataStore - The store where the data are saved
 */

export const addObservation = (dataStore, params = {}) => {
  for (const key in params) {
    const findKey = KEYS.find((row) => row.oldKey === key);
    if (findKey) {
      Object.defineProperty(
        params,
        findKey.newKey,
        Object.getOwnPropertyDescriptor(params, findKey.oldKey)
      );
      delete params[findKey.oldKey];
    }
  }
  dataStore.observations.push({ ...params });
};
