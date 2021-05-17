/**
 * return the Rating (param: c) of the observation Object
 * @param {Object} observation - The observation object  {"id": "43-TOT", "v": 28.62, "r": 43, "c": "red"}
 * @return {String} Return rating of the region as string (red || orange || yellow || green || gray)
 */
export const getRating = (observation) => observation.c;
