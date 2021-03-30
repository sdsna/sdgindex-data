import { getSdg } from "./getSdg";
/**
 * get SDGs label with the SDGs number
 * @param {number} sdgNumber - The number of the sdg should be between 1 - 17
 * @return {String} Return string with the SDGs label
 */
export const getLabel = (sdgNumber) => {
  return getSdg(sdgNumber).label;
};
