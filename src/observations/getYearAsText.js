import { getYear } from "./getYear";
import { getValue } from "./getValue";
/**
 * return the Year (param: y) of the observation Object as Text
 * @param {Object} observation - The observation object  {"id": "43-TOT", "v": 28.62, "r": 43, "c": "red", y: 2019}
 * @param {string} fallback - fallback is the string returned if score is not defined (default == "Year unavailable")
 * @return {String} Return year of the region as string
 */
export const getYearAsText = (observation, fallback = "Year unavailable") => {
  const year = getYear(observation);
  const value = getValue(observation);
  if (value != null) return year.toFixed(0);

  return fallback;
};
