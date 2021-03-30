/**
 * return the Rank (param: r) of the observation Object
 * @param {Object} observation - The observation object  {"id": "43-TOT", "s": 28.62, "r": 43, "c": "red"}
 * @return {number} Return rank of the region as number
 */
export const getRank = (observation) => observation.r;
