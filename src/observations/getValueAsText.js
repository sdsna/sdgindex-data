import { getValue } from "./getValue";
/**
 * return the Value (param: v) of the observation Object
 * @param {Object} observation - The observation object  {"id": "43-TOT", "v": 28.62, "r": 43, "c": "red"}
 * @param {number} decimals - decimals is the number of decimals returned (default == 2)
 * @param {string} fallback - fallback is the string returned if score is not defined (default == "Value unavailable")
 * @return {String} Return value of the region as string
 */
export const getValueAsText = (
  observation,
  decimals = 2,
  fallback = "Value unavailable"
) => {
  const value = getValue(observation);
  if (value != null) return value.toFixed(decimals);

  return fallback;
};
