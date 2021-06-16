import { getSdg } from "./getSdg";

/**
 * Get the color for an SDG with the given number.
 * @param {number} sdgNumber - The number of the SDG (1 - 17)
 * @return {String} Return goal color (HEX code)
 */
export const getColor = (sdgNumber) => {
  return getSdg(sdgNumber).color;
};
