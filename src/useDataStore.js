import { useEffect, useState } from "react";
import { isDataLoaded } from "./isDataLoaded";
import { loadData } from "./loadData";

/**
 * The status of the store.
 * @inner
 * @typedef {Object} DataStoreStatus
 * @property {boolean} isLoaded -
 * indicates whether the datasets have been fully loaded
 */

/**
 * Use any @sdgindex/data functions in a React component. The data store will
 * be loaded, if not already done so. Optionally, timeseries can be loaded, too.
 * The hook uses useState internally, so the component will be re-rendered when
 * the data has been fully loaded.
 *
 * @example
 * const MyComponent = () => {
 *   const { isLoaded } = useDataStore();
 *
 *   if(!isLoaded) return null;
 *
 *   return <div>my content</div>;
 * };
 *
 * @param {Object} [options]
 * @param {boolean} [options.timeseries=false] - whether to load timeseries
 * @return {DataStoreStatus}
 */
export const useDataStore = ({ timeseries = false } = {}) => {
  const [isLoaded, setIsLoaded] = useState(isDataLoaded({ timeseries }));

  useEffect(() => {
    // Load data, if not already loaded
    if (!isLoaded) loadData({ timeseries }).then(() => setIsLoaded(true));
  }, []);

  return { isLoaded };
};
