import { getSdg } from "./getSdg";
/**
 * get SDGs color with the SDGs number
 * @param {number} sdgNumber - The number of the sdg should be between 1 - 17
 * @return {String} Return string with the SDGs color in hexa
 */
export const getColor = (sdgNumber) => {
  return getSdg(sdgNumber).color;
};
