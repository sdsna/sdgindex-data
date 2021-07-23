import { store } from "./store";

/**
 * Get all regions from the store.
 * @return {Array} return an array of regions
 */
export const getRegions = () => store.regions || [];
