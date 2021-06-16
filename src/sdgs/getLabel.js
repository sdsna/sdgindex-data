import { getSdg } from "./getSdg";

/**
 * Get the label/title for an SDG with the given number.
 * @param {number} sdgNumber - The number of the SDG (1 - 17)
 * @return {String} Return goal label/title
 */
export const getLabel = (sdgNumber) => {
  return getSdg(sdgNumber).label;
};
