/**
 * return the Year (param: y) of the observation Object
 * @param {Object} observation - The observation object  {"id": "43-TOT", "v": 28.62, "r": 43, "c": "red", y: 2019}
 * @return {number} Return year of the region as number
 */
export const getYear = (observation) => observation.y;
