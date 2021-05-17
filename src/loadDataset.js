/**
 * If data not loaded, load dataset in dataStore
 * @param {Object} dataStore - The store where we load the data
 * @param {Object} dataset - The dataset to store
 * @return {bool} true if dataStore is loaded
 */
export const loadDataset = (dataStore, dataset) => {
  // Dataset is already loaded
  if (dataStore[dataset]) return true;

  // Load dataset
  return fetch(`/data/${dataset}.json`)
    .then((res) => res.json())
    .then((json) => (dataStore[dataset] = json[dataset]));
};
