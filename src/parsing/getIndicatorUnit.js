/**
 * Extract the unit from an indicator label. Assumes that the unit is wrapped in
 * parentheses. For example: "CO₂ emissions (kg/capita)"
 * @param {string} label - the label with unit
 * @return {string|null} the unit (or null, if no unit)
 */
export const getIndicatorUnit = (label) => {
  const beginningOfUnit = label.lastIndexOf("(");
  const endOfUnit = label.lastIndexOf(")");

  if (beginningOfUnit >= 0)
    return label.substring(beginningOfUnit + 1, endOfUnit);

  return null;
};
