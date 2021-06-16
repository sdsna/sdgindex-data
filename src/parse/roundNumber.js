/**
 * Round a number to a given level of precision.
 * @param {string|number} number - the number to round (can be a string)
 * @param {number} precision - the level of precision to which to round
 * (0 = whole number, 1 = one decimal, etc...)
 * @return {number} the rounded number
 */
export const roundNumber = (number, precision) => {
  if (number == null) return null;

  return (
    Math.round(parseFloat(number) * Math.pow(10, precision)) /
    Math.pow(10, precision)
  );
};
