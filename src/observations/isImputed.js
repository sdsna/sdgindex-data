/**
 * Check if the value is imputed or not.
 * @param {Object} observation - The observation object  {"id": "43-TOT", "v": 28.62, "r": 43, "c": "red"}
 * @return {bool} Return true if value is imputed and false if not
 */
export const isImputed = (observation) => observation.hasOwnProperty("i");
