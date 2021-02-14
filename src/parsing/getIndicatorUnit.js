// Helper for getting just the unit from an indicator
export const getIndicatorUnit = (label) => {
  const beginningOfUnit = label.lastIndexOf("(");
  const endOfUnit = label.lastIndexOf(")");

  if (beginningOfUnit >= 0)
    return label.substring(beginningOfUnit + 1, endOfUnit);

  return null;
};
