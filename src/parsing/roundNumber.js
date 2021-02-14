// Helper for rounding a number to a given level of precision
export const roundNumber = (number, precision) => {
  if (number == null) return null;

  return (
    Math.round(parseFloat(number) * Math.pow(10, precision)) /
    Math.pow(10, precision)
  );
};
