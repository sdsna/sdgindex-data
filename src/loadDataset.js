/**
 * Load a single dataset into the dataStore. If the dataset has already been
 * loaded, no action is taken.
 * @private
 * @param {Object} dataStore - The store where we load the data
 * @param {Object} dataset - The dataset to load
 * @return {Promise|bool} a promise that resolves when the dataset has been
 *                        loaded. If loading is already complete, returns true.
 */
export const loadDataset = (dataStore, dataset) => {
  // Dataset is already loaded
  if (dataStore[dataset]) return true;

  // Load dataset
  return fetch(`/data/${dataset}.json`)
    .then((res) => res.json())
    .then((json) => (dataStore[dataset] = json[dataset]));
};
