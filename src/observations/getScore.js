/**
 * return the Score (param: s) of the observation Object
 * @param {Object} observation - The observation object  {"id": "43-TOT", "s": 28.62, "r": 43, "c": "red"}
 * @return {number} Return score of the region as number
 */
export const getScore = (observation) => observation.s;
