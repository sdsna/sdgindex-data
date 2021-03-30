/**
 * return the Value (param: v) of the observation Object
 * @param {Object} observation - The observation object  {"id": "43-TOT", "v": 28.62, "r": 43, "c": "red"}
 * @return {number} Return value of the region as number
 */
export const getValue = (observation) => observation.v;
